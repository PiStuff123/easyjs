const easy = require("../src");

test("geometry + math helpers", () => {
  expect(easy.areaCircle(2)).toBeCloseTo(12.5664, 3);
  expect(easy.circumferenceCircle(2)).toBeCloseTo(12.5664, 3);
  expect(easy.areaSquare(3)).toBe(9);
  expect(easy.perimeterRectangle(2, 3)).toBe(10);
  expect(easy.volumeSphere(2)).toBeCloseTo(33.5103, 3);
  expect(easy.surfaceAreaCube(2)).toBe(24);
  expect(easy.pythagoras(3, 4)).toBe(5);
  expect(easy.convertCtoF(0)).toBe(32);
  expect(easy.convertFtoC(32)).toBe(0);
  expect(easy.quadraticDiscriminant(1, 0, -4)).toBe(16);
  expect(easy.triangularNumber(4)).toBe(10);
  expect(easy.isPowerOfTwo(8)).toBe(true);
  expect(easy.isMultipleOf(10, 5)).toBe(true);
});
