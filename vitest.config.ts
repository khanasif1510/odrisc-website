import { fileURLToPath, URL } from "node:url";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    environment: "node",
    setupFiles: ["./tests/setup/vitest.setup.ts"],
    include: [
      "src/**/*.test.{ts,tsx}",
      "tests/integration/**/*.test.{ts,tsx}",
      "tests/contracts/**/*.test.{ts,tsx}",
    ],
    exclude: [
      "node_modules/**",
      ".next/**",
      "tests/e2e/**",
      "tests/visual/**",
      "storybook-static/**",
    ],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html", "lcov"],
      reportsDirectory: "./coverage",
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/**/*.stories.tsx",
        "src/**/*.d.ts",
        "src/**/types.ts",
        "src/generated/**",
        "src/app/**/page.tsx",
        "src/app/**/layout.tsx",
        "src/design-system/tokens/**",
      ],
      thresholds: {
        statements: 80,
        lines: 80,
        functions: 80,
        branches: 75,
        "src/server/application/forms/**": {
          statements: 90,
          lines: 90,
          functions: 90,
          branches: 85,
        },
        "src/lib/analytics/**": {
          statements: 90,
          lines: 90,
          functions: 90,
          branches: 85,
        },
        "src/features/product-status/**": {
          statements: 90,
          lines: 90,
          functions: 90,
          branches: 85,
        },
      },
    },
  },
});
