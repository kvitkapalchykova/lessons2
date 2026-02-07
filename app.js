'use strict';

let set = new Set()

let ivan = { name: "Іван"}
let petro = { name: "Петро"}
let maria = { name: "Марія"}

// підраховуємо гостей, деякі приходять кілька разів :
set.add(ivan)
set.add(petro)
set.add(maria)
set.add(ivan)
set.add(maria)

// set зберігає тільки 3 унікальних значення :
console.log(set.size) // 3

for (let user of set) {
    console.log(user.name) // "Іван", "Петро", "Марія" - по черзі додавання
}


//перебір об'єкта Set : 
let set2 = new Set(["апельсин", "яблука", "банани"])

for (let value of set2) {
    console.log(value) 
}

set2.forEach((value, valueAgain, set2) => {
    console.log(value) 
})
