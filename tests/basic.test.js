const easy = require("../src");

test("basic helpers", () => {
  expect(easy.identity(5)).toBe(5);
  expect(easy.noop()).toBeUndefined();
  expect(easy.isNil(null)).toBe(true);
  expect(easy.isEmpty([])).toBe(true);
  expect(easy.defaultTo(null, 10)).toBe(10);
  expect(easy.normalizeString("  ToM  ")).toBe("tom");
  expect(easy.anyOf("tom", ["thomas", "tom"])).toBe(true);
  expect(easy.eqAny("x", "a", "x")).toBe(true);
  expect(easy.once(() => 1)()).toBe(1);
});
