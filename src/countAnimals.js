const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function animals() {
  return species.reduce((prev, current) => {
    const obj = prev;
    obj[current.name] = current.residents.length;
    return obj;
  }, {});
}

function countAnimals(animal) {
  if (!animal) {
    return animals();
  }
  if (Object.keys(animal).length === 1) {
    return species.find((specie) => specie.name === animal.specie).residents.length;
  }
  return species
    .find((specie) => specie.name === animal.specie).residents
    .filter((sex) => sex.sex === animal.sex).length;
}
// console.log(countAnimals());
module.exports = countAnimals;
