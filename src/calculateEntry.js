const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((value) => value.age < 18).length;
  const adult = entrants.filter((value) => value.age >= 18 && value.age < 50).length;
  const senior = entrants.filter((value) => value.age >= 50).length;
  const totalEntrants = { child, adult, senior };
  return totalEntrants;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const people = countEntrants(entrants);
  const childPrice = people.child * prices.child;
  const adultPrice = people.adult * prices.adult;
  const seniorPrice = people.senior * prices.senior;

  return childPrice + adultPrice + seniorPrice;
}

console.log(calculateEntry());

module.exports = { calculateEntry, countEntrants };
