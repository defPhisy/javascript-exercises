const sumAll = function (start, end) {
  if (start > end) {
    const temp = end;
    end = start;
    start = temp;
  }
  if (
    typeof start !== 'number' ||
    typeof end !== 'number' ||
    start < 0 ||
    end < 0
  ) {
    return "ERROR";
  }

  let result = 0;
  for (let i = start; i <= end; i++) {
    result += i;
  }
  return result;
};

sumAll(1, 4);
// Do not edit below this line
module.exports = sumAll;
