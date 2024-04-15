const removeFromArray = function (array, ...args) {
  for (const element of args) {
    let index = array.indexOf(element);
    while (index > -1) {
      array.splice(index, 1);
      index = array.indexOf(element);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
