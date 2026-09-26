# SmarterASP.NET build preparation — 19 September 2026

Production artifact: `dist/odrisc-smarteraspnet.zip` (162.3 MiB).

Deployment instructions and technology details: [SmarterASP.NET guide](../engineering/SMARTERASP_DEPLOYMENT.md).

## Completed

- Removed unused source variable and corrected formatting.
- Stopped tracking generated pnpm cache files; ignored future caches.
- Centralized internal locale path generation while preserving production rewrite behavior.
- Added IIS configuration, Windows x64 native image dependencies, a portable runtime package, checksum and deployment smoke checks.
- Included 89 referenced media/brand assets; excluded 152 unused revisions from the upload. Source assets remain intact.
- Corrected audience-button text contrast in both headers using the existing mint-deep text color. Green backgrounds, icon, geometry and behavior remain unchanged.
- Replaced viewport-specific test skips with actual desktop/mobile assertions.

## Verification

- Production build: passed.
- Format, lint, TypeScript and all repository validators: passed before the final CSS-only contrast adjustment; modified CSS was formatted and the final build passed.
- Unit/contract tests: 36 passed.
- Packaged server: 17 routes, 24 JavaScript/CSS assets, 89 public assets, locale redirects, 404 behavior, native image optimization, video range responses and absence of symlinks/environment files passed on the final artifact.
- Responsive layout/navigation checks: 15 passed across Chromium desktop, Safari/WebKit desktop and mobile Chromium before the CSS-only contrast adjustment.
- Final provider browser suite: 15 passed across desktop, mobile and reduced-motion configurations, including automated accessibility on all six provider routes.
- Windows x64 native image binary: present and its PE x64 header verified. Windows/IIS execution has not been tested locally.

## Outstanding before full release sign-off

- Confirm Node.js 24 x64 and IIS httpPlatformHandler support on the owner's SmarterASP.NET account. The owner is unsure which plan/runtime is enabled.
- The existing broad coverage gate fails: lines 5.89% against 80%; statements 5.74%, functions 5.47%, branches 3.99%. Thresholds were not lowered or suppressed.
- Production dependency audit could not complete: npm's advisory endpoint returned HTTP 503 maintenance. Repeat `pnpm audit --prod` when available.
- Provider pages intentionally retain noindex review metadata; clinician signup/login integration remains deferred.

No files were uploaded, no DNS changed and no site published. The archive is a production-mode build for hosting verification; it is not a claim that all release gates have passed.
