'use strict';

let animal = {
    eats: true,
    walk() {
        console.log("Тварина йде")
    }
}

let rabbit = {
    jumps: true
}
//об’єкт animal встановлюється як прототип для об’єкта rabbit
rabbit.__proto__ = animal

console.log(rabbit.eats) // true
console.log(rabbit.jumps) // true
rabbit.walk() // Тварина йде


let longEar = {
    earLength: 10,
    __proto__: rabbit
}
// метод walk беремо з ланцюжка прототипів
longEar.walk() // Тварина йде
console.log(longEar.jumps) // true

// визначаємо власний метод walk для об’єкта rabbit:
rabbit.walk = function() {
    console.log("Кролик скік-скік!")
}
rabbit.walk() // Кролик скік-скік!