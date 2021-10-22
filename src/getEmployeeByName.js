const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const emName = (eName) => eName.firstName === employeeName || eName.lastName === employeeName;

  if (employeeName === undefined) {
    return {};
  }
  return employees.find(emName);
}

module.exports = getEmployeeByName;
