const data = require('../data/zoo_data');
const { hours, species } = require('../data/zoo_data');

// Cria o valor da chave officeHour com o valor do dia escolhido (parâmetro)
function templateDays(day) {
  return `Open from ${hours[day].open}am until ${hours[day].close}pm`;
}

// Encontra os animais que estão disponíveis no dia (parâmetro)
function animalsDay(day) {
  const returnAnimals = [];
  species.forEach((specie) => {
    if (specie.availability.includes(day)) {
      returnAnimals.push(specie.name);
    }
  });
  return returnAnimals;
}

const days = Object.keys(hours); // Array de dias da semana

// Sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis;
function findInfo() {
  const obj = {};
  days.forEach((day) => {
    if (day === 'Monday') {
      obj[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      obj[day] = {
        officeHour: templateDays(day),
        exhibition: animalsDay(day),
      };
    }
  });
  return obj;
}

const animals = species.map((animal) => animal.name); // Array com nome dos animais

// Parâmetros nome do animal ou dia // Se o parâmetro não for um dia ou um animal, retorna a função findInfo()
function findWithParam(param) {
  if (days.includes(param)) {
    if (param === 'Monday') {
      return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
    }
    const nParam = { [param]: { officeHour: templateDays(param), exhibition: animalsDay(param) } };
    return nParam;
  }
  if (animals.includes(param)) {
    return species.find((animal) => animal.name === param).availability;
  }
  return findInfo();
}

// Função requisito 08
function getSchedule(scheduleTarget) {
  if (!scheduleTarget) return findInfo();

  return findWithParam(scheduleTarget);
}

// console.log(getSchedule());

module.exports = getSchedule;
