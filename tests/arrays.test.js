const easy = require("../src");

test("array helpers", () => {
  expect(easy.range(5)).toEqual([0, 1, 2, 3, 4]);
  expect(easy.sum(1, 2, 3, 4)).toBe(10);
  expect(easy.avg(2, 4, 6)).toBe(4);
  expect(easy.median([1, 3, 2])).toBe(2);
  expect(easy.mode([1, 2, 2, 3])).toBe(2);
  expect(easy.percentile([1, 2, 3, 4, 5], 90)).toBe(5);
  expect(easy.intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  expect(easy.difference([1, 2, 3], [2])).toEqual([1, 3]);
  expect(easy.union([1, 2], [2, 3])).toEqual([1, 2, 3]);
  expect(easy.chunk([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
  expect(easy.move([1, 2, 3], 0, 2)).toEqual([2, 3, 1]);
  expect(easy.findLast([1,2,3,4], x => x % 2 === 0)).toBe(4);
  expect(easy.rotate([1,2,3,4], 1)).toEqual([4,1,2,3]);
  expect(easy.zipObject(["a","b"], [1,2])).toEqual({ a: 1, b: 2 });
  expect(easy.chain([1, 2, 2, 3]).uniq().shuffle().take(2).value().length).toBe(2);
});
