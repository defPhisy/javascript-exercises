const findTheOldest = function (arr) {
  return arr.reduce((oldest, current) => {
    const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
    const currentAge = getAge(current.yearOfDeath, current.yearOfBirth);
    return oldestAge > currentAge ? oldest : current;
  });
};

const getAge = function (death, birth) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
