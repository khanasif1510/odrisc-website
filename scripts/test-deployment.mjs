import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { access, lstat, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const bundle = path.join(root, "dist/smarteraspnet");
const port = process.env.ODRISC_TEST_PORT ?? "3187";
const origin = `http://127.0.0.1:${port}`;
let server;
let logs = "";

async function checkFiles(directory) {
  for (const name of await readdir(directory)) {
    const filename = path.join(directory, name);
    const info = await lstat(filename);
    assert(!info.isSymbolicLink(), `Symlink cannot be shipped to IIS: ${filename}`);
    assert(
      !name.startsWith(".env") && name !== ".DS_Store" && name !== ".git",
      `Private file in package: ${filename}`,
    );
    if (info.isDirectory()) await checkFiles(filename);
  }
}

async function main() {
  await access(path.join(bundle, "server.js"));
  await checkFiles(bundle);
  const metadata = JSON.parse(
    await readFile(path.join(root, "dist/smarteraspnet-build.json"), "utf8"),
  );
  for (const name of metadata.windowsNativePackages)
    await access(path.join(bundle, "node_modules", name, "package.json"));

  server = spawn(process.execPath, ["server.js"], {
    cwd: bundle,
    env: { ...process.env, NODE_ENV: "production", PORT: port, HOSTNAME: "127.0.0.1" },
    stdio: ["ignore", "pipe", "pipe"],
  });
  server.stdout.on("data", (chunk) => {
    logs += chunk;
  });
  server.stderr.on("data", (chunk) => {
    logs += chunk;
  });
  server.on("error", (error) => {
    logs += error.message;
  });
  // Wait for this process to bind, rather than accepting a different server
  // which might already be listening on the requested port.
  for (let attempt = 0; attempt < 120 && !logs.includes("Ready in"); attempt++) {
    if (server.exitCode !== null) throw new Error(logs);
    await delay(250);
  }
  assert(logs.includes("Ready in"), `Packaged server failed to start:\n${logs}`);

  const routes = [
    "/",
    "/patients/",
    "/about/",
    "/contact/",
    "/patients/nutrition/",
    "/patients/physical-activity/",
    "/patients/weight-monitoring/",
    "/patients/risk-awareness/",
    "/patients/maternal-and-fetal-progress/",
    "/providers/",
    "/providers/clinical-platform/",
    "/providers/methodology/",
    "/providers/request-demonstration/",
    "/providers/intelligence/fetal-growth-intelligence/",
    "/providers/intelligence/maternal-intelligence/",
    "/ar/",
    "/ar/patients/",
  ];
  const assets = new Set();
  for (const route of routes) {
    const response = await fetch(`${origin}${route}`, {
      signal: AbortSignal.timeout(15000),
      redirect: "manual",
    });
    assert.equal(response.status, 200, `Route failed: ${route}`);
    assert.equal(response.headers.get("x-powered-by"), null);
    const html = await response.text();
    assert.match(html, new RegExp(`lang="${route.startsWith("/ar/") ? "ar" : "en"}"`));
    if (route.startsWith("/ar/")) assert.match(html, /dir="rtl"/);
    if (route.startsWith("/providers/")) assert.match(html, /name="robots" content="noindex/);
    for (const match of html.matchAll(/(?:src|href)="(\/_next\/static\/[^"?]+)/g))
      assets.add(match[1]);
  }
  for (const asset of [...assets, ...metadata.assets.map((asset) => `/${asset}`)]) {
    const response = await fetch(`${origin}${asset}`, {
      method: "HEAD",
      signal: AbortSignal.timeout(15000),
    });
    assert.equal(response.status, 200, `Missing packaged asset: ${asset}`);
  }
  const redirect = await fetch(`${origin}/en/patients/?campaign=deployment`, {
    redirect: "manual",
  });
  assert.equal(redirect.status, 307);
  assert.equal(new URL(redirect.headers.get("location"), origin).pathname, "/patients/");
  assert.equal(
    new URL(redirect.headers.get("location"), origin).searchParams.get("campaign"),
    "deployment",
  );
  for (const url of [
    "/ar/providers/",
    "/not-a-real-page/",
    "/.env",
    "/server.js",
    "/package.json",
  ]) {
    assert.equal((await fetch(`${origin}${url}`)).status, 404, `Unexpected public path: ${url}`);
  }
  const optimized = await fetch(`${origin}/_next/image/?url=%2Fbrand%2Fodrisc-logo.png&w=256&q=75`);
  assert.equal(optimized.status, 200, "Native image optimization failed");
  assert.match(optimized.headers.get("content-type"), /^image\//);
  assert((await optimized.arrayBuffer()).byteLength > 100);
  const video = metadata.assets.find((filename) => filename.endsWith(".mp4"));
  assert(video, "No video assets packaged");
  const range = await fetch(`${origin}/${video}`, { headers: { Range: "bytes=0-1023" } });
  assert.equal(range.status, 206, "Video range requests must work");
  assert.equal((await range.arrayBuffer()).byteLength, 1024);
  console.log(
    `PASS: packaged server; ${routes.length} routes; ${assets.size} JS/CSS assets; ${metadata.assets.length} public assets; locale redirects; 404s; image optimization; video ranges; no secrets or symlinks.`,
  );
  console.log(
    "Windows native packages are present. IIS execution must still be verified on the hosting account.",
  );
}

try {
  await main();
} catch (error) {
  console.error(error);
  if (logs) console.error(logs);
  process.exitCode = 1;
} finally {
  if (server && server.exitCode === null) server.kill("SIGTERM");
}
