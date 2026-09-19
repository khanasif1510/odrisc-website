# ODRISC: production build and SmarterASP.NET deployment

Prepared 2026-09-19. This guide covers the public website in this repository.

## Technology actually used

| Layer            | Implementation                                                          |
| ---------------- | ----------------------------------------------------------------------- |
| Framework        | Next.js 16.2.11, App Router, standalone server output                   |
| UI               | React 19.2.4, TypeScript                                                |
| Styling          | Tailwind CSS 4, custom CSS, CSS Modules, CSS variables                  |
| Animation        | Motion for React 13.0.0 with reduced-motion support                     |
| Localization     | next-intl 4.13.4; default English URLs, Arabic under `/ar/`             |
| Icons and font   | Lucide React, local brand assets, Manrope through next/font             |
| Images and video | Next.js image optimization with sharp; local images, SVGs and MP4 video |
| Build runtime    | Node.js 24; pnpm 11.17.0; lockfile-pinned dependencies                  |
| Verification     | ESLint, Prettier, TypeScript, Vitest, Playwright and axe                |
| Component review | Storybook                                                               |
| Content/data     | Repository-controlled content and synthetic demonstration data          |

The public website does not connect to a database or implement clinician login. The existing patient application is separate. Clinician integration remains deferred until its API and URLs are supplied.

## 1. Confirm the hosting runtime

The prepared ZIP targets **Windows x64, Node.js 24 and IIS httpPlatformHandler**. A standard static-file upload without a Node.js runtime cannot execute it.

In SmarterASP.NET, check **Control Panel → Hosting Manager → Node.js**. SmarterASP.NET documents this enablement path and IIS integration, but the runtime version available on your account is not yet known. See [Node.js hosting](https://www.smarterasp.net/nodejs_hosting) and [Quick Start Node.js](https://www.smarterasp.net/support/kb/a1970/quick-start-node_js.aspx).

If the panel does not show the runtime version, send support this request:

> Please confirm that my website can run Node.js 24 x64 with IIS httpPlatformHandler. I need to run a Next.js 16 standalone server.js using PORT=%HTTP_PLATFORM_PORT%, bind to 127.0.0.1, load sharp's Windows x64 native image module, and write to the website's .next/cache directory. Please confirm the node executable path and the correct website root for upload.

If the account offers another Node version or architecture, resolve that compatibility before uploading. Do not install a second framework, switch to ASP.NET, or change this app to static export as a deployment shortcut.

## 2. Install the build dependencies

On your Mac, using the existing nvm installation:

```bash
cd /Users/asifkhan/Documents/odrisc-website
nvm install
nvm use
corepack enable
node --version
pnpm --version
pnpm install --frozen-lockfile
```

Expect Node.js 24 and pnpm 11.17.0. The repository declares the exact Node patch in `.nvmrc`. Dependency installation also includes the Windows image runtime; the production server does not need npm or pnpm installation on the hosting account.

The build needs internet access to download the Manrope font from Google when it is not cached. Next.js then serves the compiled font from the website itself.

## 3. Run quality checks

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm validate
pnpm test
pnpm test:coverage
pnpm audit --prod
```

Do not interpret a successful build as passing all quality gates. The broad coverage gate and verification results are listed in the [preparation report](../project/PRODUCTION_BUILD_REPORT.md). The header contrast finding was corrected and the final provider accessibility checks passed. The npm advisory service returned HTTP 503 maintenance during preparation; repeat the audit when it is available.

## 4. Build the deployment package

```bash
pnpm build:smarteraspnet
pnpm test:deployment
```

The first command builds Next.js and creates:

```text
dist/
  odrisc-smarteraspnet.zip
  odrisc-smarteraspnet.zip.sha256
  smarteraspnet-build.json
  smarteraspnet/
    server.js
    web.config
    package.json
    node_modules/
    .next/
    public/
```

The ZIP contains the **contents** of `smarteraspnet/`, ready to extract into the website root. The build manifest and checksum are kept outside the served application. Unreferenced media revisions are omitted from the package, while original files remain in the repository. Development dependencies and pnpm store files are excluded.

`test:deployment` starts and stops its own local production server on port 3187. It verifies locale redirects, representative page routes, packaged assets, image optimization, video range requests, and the absence of symlinks and environment files. If port 3187 is occupied, select another port:

```bash
ODRISC_TEST_PORT=3188 pnpm test:deployment
```

Verify the ZIP checksum on your Mac:

```bash
cd /Users/asifkhan/Documents/odrisc-website/dist
shasum -a 256 -c odrisc-smarteraspnet.zip.sha256
```

## 5. Preview the packaged website

From the project directory:

```bash
HOSTNAME=127.0.0.1 PORT=3100 node dist/smarteraspnet/server.js
```

Open `http://127.0.0.1:3100`. Press Ctrl+C to stop it. To run the existing browser tests against this packaged server, use a second terminal:

```bash
cd /Users/asifkhan/Documents/odrisc-website
PLAYWRIGHT_BASE_URL=http://127.0.0.1:3100 pnpm exec playwright test --project=chromium-desktop
```

This local preview runs on macOS. It cannot certify IIS or Windows-native execution.

## 6. Upload using the hosting control panel or FTPS

1. Confirm the requirements in step 1 and back up the existing website before replacement.
2. Enable Node.js for the target website. Set the website root to the folder confirmed by the host.
3. Use a new empty website folder for the release where the panel supports it. This avoids leaving stale files from an older release.
4. Upload and extract `odrisc-smarteraspnet.zip` using File Manager, if ZIP extraction is supported. Otherwise, use an FTPS client to upload **everything inside** `dist/smarteraspnet/`, including the hidden `.next` folder.
5. Ensure `web.config`, `server.js`, `package.json`, `.next`, `public` and `node_modules` are siblings directly in the website root.
6. Use the supplied web.config. It starts `node server.js` through httpPlatformHandler, passes the host's assigned port, and binds to loopback. If support provides an absolute Node executable path, update only `processPath` to that path.
7. Ensure the Node process can write to `.next/cache` for image optimization. Ask the host for the appropriate permission setting; do not make the entire application publicly writable.
8. Restart/recycle the website using the hosting panel, then test the temporary hostname before changing DNS.

Do not upload the source repository, `.env` files, Git history, test reports, the full development `node_modules`, or just the `.next` folder. No SQL database setup, `dotnet publish`, npm install, or manual long-running terminal process is required on the server for this package. IIS starts the process through the supplied configuration.

## 7. Verify the hosted website and connect the domain

Use the actual temporary hostname supplied by your account; the placeholder below must be replaced:

```bash
curl -I https://YOUR-TEMPORARY-HOST/patients/
curl -I https://YOUR-TEMPORARY-HOST/providers/
curl -I https://YOUR-TEMPORARY-HOST/ar/
curl -I https://YOUR-TEMPORARY-HOST/brand/odrisc-logo.png
curl -I 'https://YOUR-TEMPORARY-HOST/_next/image/?url=%2Fbrand%2Fodrisc-logo.png&w=256&q=75'
```

Check pages, CSS, scripts, images, video playback, English/Arabic navigation, patient/provider links, and the provider header's scroll behavior in a browser. Direct English-prefixed URLs should redirect to the unprefixed equivalent. Arabic provider review URLs intentionally return 404.

Then add the production domain in the hosting panel and use the exact DNS values provided by SmarterASP.NET. Keep existing mail records when changing website DNS. Enable the host's SSL certificate and HTTPS redirect after the domain resolves correctly. Repeat the checks on the final HTTPS domain.

## Troubleshooting

| Symptom                                   | Check                                                                                                                      |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| IIS 500.19 / unknown httpPlatform section | Node.js/httpPlatformHandler is not enabled or the IIS configuration is incompatible with the account. Ask hosting support. |
| Process fails to start / 502              | Confirm Node.js 24 x64, the executable path, website root, and the sibling server.js file. Use hosting logs.               |
| Images fail but pages work                | Confirm the Windows x64 sharp package was uploaded and `.next/cache` is writable.                                          |
| CSS or JavaScript returns 404             | The `.next/static` folder was omitted or the wrong folder was selected as the website root.                                |
| Videos return 404                         | Upload the package's `public` directory intact.                                                                            |
| Locale redirect loop                      | Use the final packaged proxy/server output; do not combine it with an older release or add blanket SPA rewrite rules.      |
| ZIP upload/extraction limit               | Upload the unpacked package through FTPS, including hidden folders.                                                        |

The provider pages remain review pages with noindex metadata, and clinician login integration is pending. Those boundaries are preserved by this deployment work.
