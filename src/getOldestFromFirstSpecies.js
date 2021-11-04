const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const findAnimal = employees.find((person) => person.id === id).responsibleFor[0];
  const firtsAnimal = species.find((animale) => animale.id === findAnimal).residents;
  const older = firtsAnimal.sort((a, b) => b.age - a.age)[0];

  return Object.values(older);
}

// console.log(getOldestFromFirstSpecies('b0dc644a-5335-489b-8a2c-4e086c7819a2'));

module.exports = getOldestFromFirstSpecies;
