const easy = require("../src");

test("object helpers", () => {
  expect(easy.pick({ a: 1, b: 2, c: 3 }, ["a", "c"])).toEqual({ a: 1, c: 3 });
  expect(easy.omit({ a: 1, b: 2, c: 3 }, ["b"])).toEqual({ a: 1, c: 3 });
  expect(easy.mapKeys({ a: 1, b: 2 }, k => k.toUpperCase())).toEqual({ A: 1, B: 2 });
  expect(easy.deepMerge({ a: { b: 1 } }, { a: { c: 2 } })).toEqual({ a: { b: 1, c: 2 } });
  expect(easy.objectCompact({ a: null, b: "", c: 1 })).toEqual({ c: 1 });
  expect(easy.has({ a: 1 }, "a")).toBe(true);
  expect(easy.keys({ a: 1, b: 2 })).toEqual(["a", "b"]);
  expect(easy.values({ a: 1, b: 2 })).toEqual([1, 2]);
  expect(easy.entries({ a: 1 })).toEqual([["a", 1]]);
  expect(easy.fromEntries([["a", 1]])).toEqual({ a: 1 });
  expect(easy.mapValues({ a: 1, b: 2 }, v => v * 2)).toEqual({ a: 2, b: 4 });
  expect(easy.hasPath({ a: { b: 2 } }, "a.b")).toBe(true);
});
