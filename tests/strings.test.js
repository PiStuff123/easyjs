const easy = require("../src");

test("string helpers", () => {
  expect(easy.camelCase("hello world")).toBe("helloWorld");
  expect(easy.snakeCase("Hello World")).toBe("hello_world");
  expect(easy.kebabCase("Hello World")).toBe("hello-world");
  expect(easy.pascalCase("hello world")).toBe("HelloWorld");
  expect(easy.reverseString("abc")).toBe("cba");
  expect(easy.countOccurrences("a-b-a", "a")).toBe(2);
  expect(easy.ensurePrefix("world", "hello ")).toBe("hello world");
  expect(easy.ensureSuffix("hello", "!" )).toBe("hello!");
});
