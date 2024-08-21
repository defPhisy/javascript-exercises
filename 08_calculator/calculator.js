// const add = function (a, b) {
//   return a + b;
// };

const add = (a, b) => a + b;

// const subtract = function (a, b) {
//   return a - b;
// };

const subtract = (a, b) => a - b;

// const sum = function (arr) {
//   return arr.reduce((total, num) => total + num, 0);
// };

const sum = (arr) => arr.reduce((total, num) => total + num, 0);

// const multiply = function (arr) {
//   return arr.reduce((total, num) => total * num, 1);
// };

const multiply = (arr) => arr.reduce((total, num) => total * num);

// const power = function (a, b) {
//   return a ** b;
// };

const power = (a, b) => a ** b;

// const factorial = function (n) {
//   if (n <= 1) {
//     return 1;
//   }
//   return n * factorial(n-1);
// };

const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
