import http from "node:http";
import https from "node:https";

import { vi } from "vitest";

export class UnexpectedNetworkRequestError extends Error {
  constructor(method: string, destination: string) {
    super(
      `Unexpected outbound request blocked during unit or component testing: ${method} ${destination}`,
    );

    this.name = "UnexpectedNetworkRequestError";
  }
}

function describeDestination(value: unknown) {
  if (value instanceof URL) {
    return value.href;
  }

  if (typeof value === "string") {
    return value;
  }

  if (value && typeof value === "object") {
    const options = value as {
      host?: string;
      hostname?: string;
      path?: string;
      port?: number | string;
      protocol?: string;
    };

    const protocol = options.protocol ?? "http:";
    const hostname = options.hostname ?? options.host ?? "unknown-host";
    const port = options.port ? `:${options.port}` : "";
    const requestPath = options.path ?? "/";

    return `${protocol}//${hostname}${port}${requestPath}`;
  }

  return "unknown-destination";
}

function readNodeRequestMethod(argumentsList: readonly unknown[]) {
  for (const value of argumentsList.slice(0, 2)) {
    if (value && typeof value === "object" && "method" in value) {
      const method = (value as { method?: unknown }).method;

      if (typeof method === "string") {
        return method.toUpperCase();
      }
    }
  }

  return "GET";
}

function blockNodeRequest(...argumentsList: unknown[]): never {
  throw new UnexpectedNetworkRequestError(
    readNodeRequestMethod(argumentsList),
    describeDestination(argumentsList[0]),
  );
}

const blockedFetch: typeof fetch = async (input, init) => {
  const requestMethod =
    init?.method ??
    (typeof Request !== "undefined" && input instanceof Request ? input.method : "GET");

  const destination =
    typeof Request !== "undefined" && input instanceof Request ? input.url : input;

  throw new UnexpectedNetworkRequestError(
    requestMethod.toUpperCase(),
    describeDestination(destination),
  );
};

export function installUnexpectedNetworkGuard() {
  vi.stubGlobal("fetch", blockedFetch);

  vi.spyOn(http, "request").mockImplementation(blockNodeRequest as typeof http.request);
  vi.spyOn(http, "get").mockImplementation(blockNodeRequest as typeof http.get);
  vi.spyOn(https, "request").mockImplementation(blockNodeRequest as typeof https.request);
  vi.spyOn(https, "get").mockImplementation(blockNodeRequest as typeof https.get);
}
