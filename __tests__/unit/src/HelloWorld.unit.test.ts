import { describe, expect, test } from "@jest/globals";

import { sayGoodbye, sayHello } from "../../../src/HelloWorld";

describe("HelloWorld", () => {
  describe("sayGoodbye", () => {
    test("return goodbye, passed", () => {
      expect(sayGoodbye()).toBe("goodbye");
    });
  });

  describe("sayHello", () => {
    test("return hi, passed", () => {
      expect(sayHello()).toBe("hi");
    });
  });
});
