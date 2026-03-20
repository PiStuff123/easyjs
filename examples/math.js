const easyJS = require("@cooljs123/easyjs");

// Geometry
console.log(easyJS.areaCircle(2))                 // 12.566370614359172
console.log(easyJS.perimeterRectangle(2, 3))      // 10
console.log(easyJS.volumeSphere(2))               // 33.510321638291124

// Basic math
console.log(easyJS.add(2, 3))                     // 5
console.log(easyJS.mul(2, 3))                     // 6
console.log(easyJS.sqrt(9))                       // 3

// Stats
console.log(easyJS.sum(1,2,3,4))                  // 10
console.log(easyJS.avg(2,4,6))                    // 4
console.log(easyJS.median([1,3,2]))               // 2
