import AxeBuilder from "@axe-core/playwright";

import type { Page } from "@playwright/test";

export async function analyzeAccessibility(page: Page) {
  return new AxeBuilder({ page }).analyze();
}
