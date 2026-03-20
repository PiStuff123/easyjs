const easyJS = require('../src')
const reversePlugin = (easy) => {
  easy.poo = (str) => String(str).interleave(easyJS.repeat('POO', str.length / 3))
    easy.reverse = (str) => String(str).split("").reverse().join("");
};
easyJS.install()
easyJS.use(reversePlugin)
console.log(easyJS.poo('OOP'))