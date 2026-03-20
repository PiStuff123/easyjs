const easyJS = require("@cooljs123/easyjs");

console.log(easyJS.range(5))                                  // [0,1,2,3,4]
console.log(easyJS.sum(1,2,3,4))                               // 10
console.log(easyJS.avg(2,4,6))                                 // 4
console.log(easyJS.median([1,3,2]))                            // 2
console.log(easyJS.mode([1,2,2,3]))                            // 2
console.log(easyJS.percentile([1,2,3,4,5], 90))                // 5
console.log(easyJS.intersection([1,2,3], [2,3,4]))             // [2,3]
console.log(easyJS.difference([1,2,3], [2]))                   // [1,3]
console.log(easyJS.shuffle([1,2,3]))                           // random
