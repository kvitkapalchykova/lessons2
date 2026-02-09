'use strict';

const prices = {
  banana: 1,
  orange: 2, 
  meat: 4
}

let doublePrices = Object.fromEntries(
  // перетворити ціни на масив, потім застосувати map, щоб перетворити на пари ключ/значення :
  // а потім fromEntries повертає об’єкт :
  Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
)

console.log(doublePrices.meat) // 8
console.log(doublePrices)



const salaries = {
  "Іван": 100,
  "Петро": 300,
  "Марія": 250
}

// отримаємо суму всіх зарплат за допомогою Object.values та циклуfor..of.
function sumSalaries(salaries) {

  let sum = 0
  for (let salary of Object.values(salaries)) {
    sum += salary
  } 

  return sum 
}

/* варіант 2 : за допомогою reduce перебираємо масив значень salaries,складаємо їх і повертаємо результат :*/
function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0) 
}

console.log(sumSalaries(salaries)) // 650


const user = {
  name: 'Іван',
  age: 30
}
// визначити кількість властивостей об'єкта :
function count(obj) {
  return Object.keys(obj).length
}
console.log(count(user)) // 2