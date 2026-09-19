# ADR-019: Manual SmarterASP.NET production package

Date: 2026-09-19

Status: Accepted for package preparation at the owner's request. Hosting-account compatibility and publication remain pending.

## Context

The owner requested cleanup and a production build for SmarterASP.NET. This request authorizes a host-specific manual packaging workflow in addition to the existing local standalone build. It does not authorize uploading or publishing the website, changing product availability, or enabling clinician authentication.

SmarterASP.NET documents Windows IIS hosting through httpPlatformHandler and a PORT environment variable. The public documentation does not establish the Node version available on this owner's account.

## Decision

- Retain Next.js standalone output, Node.js 24, server-side locale routing, and image optimization.
- Provide an IIS web.config which forwards requests to the generated server.js using the host-assigned port and loopback binding.
- Install lockfile-pinned Windows x64 native image dependencies alongside the local development dependencies.
- Materialize traced runtime dependencies as ordinary files. Flatten only a single version per package; fail if different versions would collide. This avoids pnpm symlinks and long store paths during ZIP extraction or FTPS upload on Windows.
- Include referenced media and all dynamic brand variants. Keep the source media archive intact. Fail on unresolved or unsupported dynamic media references.
- Keep environment files, development tooling, tests, source files, caches, and repository history outside the upload package.
- Keep the default-locale rewrite on the incoming origin, derive locale prefixes from the central routing module, and retain internal-rewrite handling. A direct switch to the library middleware alone produced a redirect loop in the packaged Next.js server; the deployment smoke test covers this regression.
- Deliver a ZIP, SHA-256 checksum, and separate build manifest for manual review and publication.
- Keep existing quality thresholds intact. Package creation is not a claim that every release gate has passed.

## Verification boundary

The same packaged server is tested locally for routes, locale behavior, assets, image optimization, and video range requests. Windows native dependencies are included, but Windows/IIS execution must be verified on the target account. Enable Node.js 24 x64 with httpPlatformHandler before publication. The host account's runtime and writable Next.js cache directory remain required checks.

## Sources

- [SmarterASP.NET Quick Start Node.js](https://www.smarterasp.net/support/kb/a1970/quick-start-node_js.aspx)
- [SmarterASP.NET Node.js hosting](https://www.smarterasp.net/nodejs_hosting)
- [Next.js standalone output](https://nextjs.org/docs/app/api-reference/config/next-config-js/output)
- [sharp cross-platform installation](https://sharp.pixelplumbing.com/install/)
- [pnpm supported architectures](https://pnpm.io/settings#supportedarchitectures)
