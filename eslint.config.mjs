import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import storybook from "eslint-plugin-storybook";
import globals from "globals";

const testFiles = [
  "src/**/*.{test,spec}.{js,jsx,ts,tsx}",
  "tests/**/*.{js,jsx,ts,tsx}",
  "vitest.config.{js,mjs,ts,mts}",
  "playwright.config.{js,mjs,ts,mts}",
];

const typeScriptTestFiles = [
  "src/**/*.{test,spec}.{ts,tsx}",
  "tests/**/*.{ts,tsx}",
  "vitest.config.{ts,mts}",
  "playwright.config.{ts,mts}",
];

const browserTestFiles = [
  "src/**/*.{test,spec}.tsx",
  "tests/component/**/*.{js,jsx,ts,tsx}",
  "tests/accessibility/**/*.{js,jsx,ts,tsx}",
  "tests/visual/**/*.{js,jsx,ts,tsx}",
];

const storyFiles = ["src/**/*.stories.{js,jsx,ts,tsx}", "src/**/*.story.{js,jsx,ts,tsx}"];

export default defineConfig([
  /*
   * Next.js 16 and TypeScript baseline.
   */
  ...nextVitals,
  ...nextTypeScript,

  /*
   * Storybook Component Story Format and recommended rules.
   */
  ...storybook.configs["flat/recommended"],

  /*
   * Disable formatting rules that conflict with Prettier.
   * Prettier remains a separate command.
   */
  eslintConfigPrettier,

  /*
   * ODRISC lint-governance rules.
   */
  {
    name: "odrisc/linter-governance",

    linterOptions: {
      reportUnusedDisableDirectives: "error",
      reportUnusedInlineConfigs: "error",
    },
  },

  /*
   * ODRISC production-source rules.
   */
  {
    name: "odrisc/source-rules",

    files: ["src/**/*.{js,jsx,ts,tsx}"],

    rules: {
      curly: ["error", "all"],
      eqeqeq: ["error", "always"],
      "no-alert": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-duplicate-imports": [
        "error",
        {
          allowSeparateTypeImports: true,
        },
      ],
      "prefer-const": "error",
    },
  },

  /*
   * ODRISC TypeScript rules.
   */
  {
    name: "odrisc/typescript-rules",

    files: ["src/**/*.{ts,tsx}"],

    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],

      "@typescript-eslint/no-explicit-any": "error",

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },

  /*
   * Presentation layer:
   * components may depend only on design-system, lib, types,
   * and lower-level components.
   */
  {
    name: "odrisc/architecture-components",

    files: ["src/components/**/*.{js,jsx,ts,tsx}"],

    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "server-only",
              message: "UI components must not import server-only modules.",
            },
          ],

          patterns: [
            {
              group: [
                "@/app/**",
                "@/features/**",
                "@/content/**",
                "@/config/**",
                "@/i18n/**",
                "@/server/**",
              ],
              message:
                "Components may depend only on design-system, lib, types, and lower-level components.",
            },
          ],
        },
      ],
    },
  },

  /*
   * Feature layer:
   * features may compose components, content, config, i18n, and lib.
   */
  {
    name: "odrisc/architecture-features",

    files: ["src/features/**/*.{js,jsx,ts,tsx}"],

    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/app/**", "@/server/**"],
              message: "Feature modules must not depend on routes or server-only modules.",
            },
          ],
        },
      ],
    },
  },

  /*
   * Server layer:
   * server modules must remain independent from presentation code.
   */
  {
    name: "odrisc/architecture-server",

    files: ["src/server/**/*.{js,jsx,ts,tsx}"],

    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "client-only",
              message: "Server modules must not import client-only modules.",
            },
          ],

          patterns: [
            {
              group: [
                "@/app/**",
                "@/components/**",
                "@/features/**",
                "@/content/**",
                "@/design-system/**",
              ],
              message:
                "Server modules may depend only on config, lib, types, and server integrations.",
            },
          ],
        },
      ],
    },
  },

  /*
   * Content layer:
   * content cannot depend on routes, UI, features, or server code.
   */
  {
    name: "odrisc/architecture-content",

    files: ["src/content/**/*.{js,jsx,ts,tsx}"],

    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: [
                "@/app/**",
                "@/components/**",
                "@/features/**",
                "@/server/**",
                "@/design-system/**",
              ],
              message:
                "Content may depend only on schemas, types, and controlled formatting helpers.",
            },
          ],
        },
      ],
    },
  },

  /*
   * Foundational utilities cannot depend on higher application layers.
   */
  {
    name: "odrisc/architecture-lib",

    files: ["src/lib/**/*.{js,jsx,ts,tsx}"],

    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/app/**", "@/components/**", "@/features/**", "@/server/**"],
              message:
                "Foundational lib modules must not depend on routes, UI, features, or server modules.",
            },
          ],
        },
      ],
    },
  },

  /*
   * Design-system foundations cannot depend on consuming UI layers.
   */
  {
    name: "odrisc/architecture-design-system",

    files: ["src/design-system/**/*.{js,jsx,ts,tsx}"],

    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: [
                "@/app/**",
                "@/components/**",
                "@/features/**",
                "@/content/**",
                "@/server/**",
              ],
              message:
                "The design system must not depend on routes, components, features, content, or server modules.",
            },
          ],
        },
      ],
    },
  },

  /*
   * Vendor packages must be wrapped behind ODRISC-owned modules.
   */
  {
    name: "odrisc/architecture-route-vendors",

    files: ["src/app/**/*.{js,jsx,ts,tsx}"],

    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: [
                "recharts",
                "recharts/**",
                "motion",
                "motion/**",
                "@sentry/**",
                "@vercel/analytics",
                "@vercel/analytics/**",
                "@vercel/speed-insights",
                "@vercel/speed-insights/**",
              ],
              message:
                "Route files must use ODRISC-owned chart, motion, analytics, and observability wrappers.",
            },
          ],
        },
      ],
    },
  },

  /*
   * Integration adapters must not import route files.
   */
  {
    name: "odrisc/architecture-integrations",

    files: ["src/server/integrations/**/*.{js,jsx,ts,tsx}"],

    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/app/**"],
              message: "Integration adapters must not import Next.js route files.",
            },
          ],
        },
      ],
    },
  },

  /*
   * Test-specific environment and rule adjustments.
   *
   * Vitest and Playwright APIs should be explicitly imported.
   */
  {
    name: "odrisc/tests",

    files: testFiles,

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },

    rules: {
      "no-console": "off",
    },
  },

  {
    name: "odrisc/typescript-tests",

    files: typeScriptTestFiles,

    rules: {
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },

  {
    name: "odrisc/browser-tests",

    files: browserTestFiles,

    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  /*
   * Storybook stories run in a browser context and cannot depend
   * on private server implementation.
   */
  {
    name: "odrisc/storybook-stories",

    files: storyFiles,

    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },

    rules: {
      "@next/next/no-img-element": "off",

      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "server-only",
              message: "Storybook stories must not import server-only modules.",
            },
          ],

          patterns: [
            {
              group: ["@/server/**"],
              message: "Storybook stories must not depend on private server modules.",
            },
          ],
        },
      ],
    },
  },

  /*
   * Storybook configuration files execute in Node.js.
   */
  {
    name: "odrisc/storybook-config",

    files: [".storybook/**/*.{js,cjs,mjs,ts,mts}"],

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  /*
   * Generated and tool-produced files.
   */
  globalIgnores([
    ".next/**",
    "node_modules/**",
    "out/**",
    "build/**",
    "dist/**",
    "coverage/**",
    "storybook-static/**",
    "playwright-report/**",
    "test-results/**",
    "next-env.d.ts",
  ]),
]);
