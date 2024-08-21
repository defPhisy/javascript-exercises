const fibSequence = [0, 1, 1, 2, 3, 5, 8];

const fibonacci = function (n) {
  // if (n != Math.abs(n)) {
  if (n < 0) {
    return "OOPS";
  }

  while (fibSequence[n] === undefined) {
    const lastIndex = fibSequence.length - 1;
    fibSequence.push(fibSequence[lastIndex - 1] + fibSequence[lastIndex]);
  }
  return fibSequence[n];
};

// Do not edit below this line
module.exports = fibonacci;
