const palindromes = function (str) {
  const cleanStr = str.replace(/[^a-z0-9]/gi,"").toLowerCase();
  const reverseStr = cleanStr.split("").reverse().join("");
  return reverseStr === cleanStr;
};

// Do not edit below this line
module.exports = palindromes;
