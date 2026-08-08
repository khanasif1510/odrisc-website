import { describe, expect, it } from "vitest";

import {
  createAnalyticsFake,
  createErrorMonitoringFake,
  createLeadDeliveryFake,
  createOdriscPublicApiFake,
} from "../fakes/integration-adapters";

const approvedFakeFactories = [
  ["ODRISC public API", createOdriscPublicApiFake],
  ["lead delivery", createLeadDeliveryFake],
  ["analytics", createAnalyticsFake],
  ["error monitoring", createErrorMonitoringFake],
] as const;

describe("approved integration fake adapters", () => {
  it.each(approvedFakeFactories)(
    "provides a deterministic recording fake for %s",
    async (_name, createFake) => {
      const fake = createFake<string, string>(async (input, callIndex) => `${input}:${callIndex}`);

      await expect(fake.invoke("first")).resolves.toBe("first:0");
      await expect(fake.invoke("second")).resolves.toBe("second:1");

      expect(fake.calls).toEqual(["first", "second"]);

      fake.reset();

      expect(fake.calls).toEqual([]);
    },
  );
});
