import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import {
  access,
  cp,
  mkdir,
  readFile,
  readdir,
  realpath,
  rm,
  stat,
  writeFile,
} from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const destination = path.join(root, "dist/smarteraspnet");
const archive = path.join(root, "dist/odrisc-smarteraspnet.zip");
const standalone = path.join(root, ".next/standalone");

async function files(directory) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...(await files(filename)));
    else result.push(filename);
  }
  return result;
}

// Package exports can hide package.json. Resolve the installed package directory
// without executing a native module compiled for another operating system.
async function packageDirectory(requireFrom, name) {
  for (const search of requireFrom.resolve.paths(name) ?? []) {
    const candidate = path.join(search, name);
    try {
      await access(path.join(candidate, "package.json"));
      return await realpath(candidate);
    } catch {
      // Continue to the next Node.js module-resolution location.
    }
  }
  throw new Error(`Missing ${name}. Run pnpm install --frozen-lockfile before packaging.`);
}

async function flattenRuntimeDependencies() {
  const modules = path.join(standalone, "node_modules");
  const store = path.join(modules, ".pnpm");
  const packages = new Map();
  async function collect(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      if (entry.name.startsWith(".")) continue;
      const filename = path.join(directory, entry.name);
      if (entry.name.startsWith("@")) {
        await collect(filename);
        continue;
      }
      const resolved = await realpath(filename);
      const manifest = JSON.parse(await readFile(path.join(resolved, "package.json"), "utf8"));
      const previous = packages.get(manifest.name);
      if (previous && previous.version !== manifest.version) {
        throw new Error(
          `Cannot flatten multiple versions of ${manifest.name}; build on Windows with its native dependency layout instead.`,
        );
      }
      packages.set(manifest.name, { directory: resolved, version: manifest.version });
    }
  }
  await collect(modules);
  for (const entry of await readdir(store, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      await collect(
        entry.name === "node_modules"
          ? path.join(store, entry.name)
          : path.join(store, entry.name, "node_modules"),
      );
    }
  }
  // Preserve Node's sibling dependency resolution without symlinks or long
  // pnpm store paths, which are unreliable in Windows ZIP/FTP workflows.
  await rm(path.join(destination, "node_modules"), { recursive: true, force: true });
  for (const [name, { directory }] of packages) {
    await cp(directory, path.join(destination, "node_modules", name), {
      recursive: true,
      dereference: true,
    });
  }
}

function keepRuntimeFile(filename) {
  const segments = path.relative(standalone, filename).split(path.sep);
  const relative = segments.join("/");
  return (
    !segments.some(
      (segment) => segment.startsWith(".env") || [".DS_Store", ".git"].includes(segment),
    ) &&
    ![".next/cache", "public"].some(
      (prefix) => relative === prefix || relative.startsWith(`${prefix}/`),
    )
  );
}

async function main() {
  if (Number(process.versions.node.split(".")[0]) !== 24) {
    throw new Error("Use the project's Node.js 24 runtime before building a deployment package.");
  }
  await access(path.join(standalone, "server.js"));
  await access(path.join(root, ".next/BUILD_ID"));

  // Fail before replacing a previous artifact if target-native dependencies are missing.
  const requireFromRoot = createRequire(path.join(root, "package.json"));
  const requireFromNext = createRequire(requireFromRoot.resolve("next/package.json"));
  const sharpDirectory = await packageDirectory(requireFromNext, "sharp");
  const sharpManifest = JSON.parse(
    await readFile(path.join(sharpDirectory, "package.json"), "utf8"),
  );
  const requireFromSharp = createRequire(path.join(sharpDirectory, "package.json"));
  const windowsPackages = Object.keys(sharpManifest.optionalDependencies).filter((name) =>
    name.endsWith("win32-x64"),
  );
  if (!windowsPackages.includes("@img/sharp-win32-x64")) {
    throw new Error("The installed sharp package does not declare its Windows x64 runtime.");
  }
  const nativeDirectories = await Promise.all(
    windowsPackages.map(async (name) => [name, await packageDirectory(requireFromSharp, name)]),
  );

  const sourceFiles = (await files(path.join(root, "src"))).filter(
    (filename) => /\.(?:tsx?|css|json)$/.test(filename) && !/\.(?:test|stories)\./.test(filename),
  );
  const source = (
    await Promise.all(sourceFiles.map((filename) => readFile(filename, "utf8")))
  ).join("\n");
  if (/\/media\/[^"'`\s]*\$\{/.test(source)) {
    throw new Error("Dynamic media paths need an explicit packaging rule before release.");
  }
  const publicRoot = path.join(root, "public");
  const publicFiles = (await files(publicRoot)).filter(
    (filename) => !path.basename(filename).startsWith("."),
  );
  const assetPaths = new Set(
    [...source.matchAll(/\/(?:media|brand)\/[^"'`\s)<>]+/g)]
      .map(([url]) => url)
      .filter((url) => !url.includes("${")),
  );
  for (const url of assetPaths) await access(path.join(publicRoot, url.slice(1)));
  // Brand variants are assembled dynamically; keep all of them. Preserve root
  // public files (for example robots.txt) as well as explicitly referenced media.
  const selectedAssets = publicFiles.filter((filename) => {
    const relative = path.relative(publicRoot, filename).split(path.sep).join("/");
    return !relative.startsWith("media/") || assetPaths.has(`/${relative}`);
  });

  await rm(destination, { recursive: true, force: true });
  await rm(archive, { force: true });
  await mkdir(destination, { recursive: true });
  await cp(standalone, destination, {
    recursive: true,
    dereference: true,
    filter: keepRuntimeFile,
  });
  await flattenRuntimeDependencies();
  await cp(path.join(root, ".next/static"), path.join(destination, ".next/static"), {
    recursive: true,
  });
  for (const filename of selectedAssets) {
    const target = path.join(destination, "public", path.relative(publicRoot, filename));
    await mkdir(path.dirname(target), { recursive: true });
    await cp(filename, target);
  }
  for (const [name, directory] of nativeDirectories) {
    await cp(directory, path.join(destination, "node_modules", name), {
      recursive: true,
      dereference: true,
    });
  }
  await cp(
    path.join(root, "deploy/smarteraspnet/web.config"),
    path.join(destination, "web.config"),
  );
  // Only ship a runtime manifest, never source development scripts or tooling.
  await writeFile(
    path.join(destination, "package.json"),
    JSON.stringify(
      {
        name: "odrisc-website-production",
        private: true,
        scripts: { start: "node server.js" },
        engines: { node: ">=24 <25" },
      },
      null,
      2,
    ) + "\n",
  );

  const metadata = {
    builtAt: new Date().toISOString(),
    buildId: (await readFile(path.join(root, ".next/BUILD_ID"), "utf8")).trim(),
    buildRuntime: process.version,
    target: "Windows x64 / IIS httpPlatformHandler / Node.js 24",
    windowsNativePackages: windowsPackages,
    assetsIncluded: selectedAssets.length,
    oldAssetsOmitted: publicFiles.length - selectedAssets.length,
    assets: selectedAssets.map((filename) =>
      path.relative(publicRoot, filename).split(path.sep).join("/"),
    ),
  };
  await writeFile(
    path.join(root, "dist/smarteraspnet-build.json"),
    JSON.stringify(metadata, null, 2) + "\n",
  );

  const zipped =
    process.platform === "win32"
      ? spawnSync(
          "powershell.exe",
          [
            "-NoProfile",
            "-Command",
            "Add-Type -AssemblyName System.IO.Compression.FileSystem; [System.IO.Compression.ZipFile]::CreateFromDirectory($env:ODRISC_PACKAGE_DIR, $env:ODRISC_PACKAGE_ZIP)",
          ],
          {
            stdio: "inherit",
            env: { ...process.env, ODRISC_PACKAGE_DIR: destination, ODRISC_PACKAGE_ZIP: archive },
          },
        )
      : spawnSync("zip", ["-q", "-r", archive, "."], { cwd: destination, stdio: "inherit" });
  if (zipped.error || zipped.status !== 0)
    throw new Error("ZIP creation failed. The unpacked package is in dist/smarteraspnet.");
  const hash = createHash("sha256");
  for await (const chunk of createReadStream(archive)) hash.update(chunk);
  await writeFile(`${archive}.sha256`, `${hash.digest("hex")}  ${path.basename(archive)}\n`);
  const bytes = (await stat(archive)).size;
  console.log(`Created ${archive} (${(bytes / 1024 / 1024).toFixed(1)} MiB).`);
  console.log(
    `Included ${metadata.assetsIncluded} public assets; omitted ${metadata.oldAssetsOmitted} unused revisions. Source assets are preserved.`,
  );
  console.log(
    "Host requirement: Node.js 24 x64 with IIS httpPlatformHandler. Run pnpm test:deployment before upload.",
  );
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
