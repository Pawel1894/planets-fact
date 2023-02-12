import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

export * from "@testing-library/react";
export { vi } from "vitest";
export { default as userEvent } from "@testing-library/user-event";
