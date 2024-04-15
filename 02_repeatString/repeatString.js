const repeatString = function (string, number) {
  if (number < 0) {
    return "ERROR";
  }
  let repStr = "";
  for (let n = 0; n < number; n++) {
    repStr += string;
  }
  return repStr;
};

// Do not edit below this line
module.exports = repeatString;
