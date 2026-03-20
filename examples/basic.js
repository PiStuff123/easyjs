const easyJS = require("@cooljs123/easyjs");

// Core
console.log(easyJS.anyOf("tom", ["thomas", "tom"]))        // true
console.log(easyJS.normalizeString("  ToM  "))              // "tom"
console.log(easyJS.safeGet({ a: { b: 2 } }, "a.b", 0))       // 2
console.log(easyJS.safeSet({}, "a.b", 3))                    // { a: { b: 3 } }

// Arrays
console.log(easyJS.chunk([1,2,3,4,5], 2))                     // [[1,2],[3,4],[5]]
console.log(easyJS.union([1,2], [2,3]))                       // [1,2,3]

// Strings
console.log(easyJS.toTitleCase("hello world"))               // "Hello World"
console.log(easyJS.truncate("hello world", 8))               // "hello..."
console.log(easyJS.stringMerge("hello", " ", "world"))       // "hello world"
console.log(easyJS.interleave("123456", "POO"))              // "1P2O3O4P5O6O"

// Numbers
console.log(easyJS.roundDecimal(1.2345, "hundredths"))       // 1.23
console.log(easyJS.roundTo(1234, 100))                        // 1200

// Prototype helpers
easyJS.install();
console.log([1,2,3,4,5,6,7].chunk(2))                       // [[1,2],[3,4],[5,6],[7]]
