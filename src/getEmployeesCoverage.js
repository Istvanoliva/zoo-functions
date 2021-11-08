const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const mapping = employees.map((employee) => {
  const array = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: employee.responsibleFor.map((id) => species.find((an) => an.id === id).name),
    locations: employee.responsibleFor.map((id) => species.find((an) => an.id === id).location),
  };
  return array;
});

function getEmployeesCoverage(employInfo) {
  if (!employInfo) return mapping;

  const findOneEmploy = mapping
    .find((info) => info.id
      .includes(Object.values(employInfo)) || info.fullName
      .includes(Object.values(employInfo)));

  if (!findOneEmploy) { throw new Error('Informações inválidas'); }
  return findOneEmploy;
}

module.exports = getEmployeesCoverage;
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
