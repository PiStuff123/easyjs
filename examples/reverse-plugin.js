const reversePlugin = (easy) => {
  easy.reverse = (str) => String(str).split("").reverse().join("");
};

module.exports = reversePlugin;
