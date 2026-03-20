const easyJS = require("@cooljs123/easyjs");

console.log(easyJS.pick({ a:1, b:2, c:3 }, ["a","c"]))       // { a: 1, c: 3 }
console.log(easyJS.omit({ a:1, b:2, c:3 }, ["b"]))            // { a: 1, c: 3 }
console.log(easyJS.mapKeys({ a:1, b:2 }, k => k.toUpperCase()))// { A: 1, B: 2 }
console.log(easyJS.deepMerge({ a:{ b:1 } }, { a:{ c:2 } }))     // { a: { b:1, c:2 } }
console.log(easyJS.objectCompact({ a:null, b:"", c:1 }))       // { c: 1 }
