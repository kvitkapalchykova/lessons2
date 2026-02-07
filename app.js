'use strict';

let map = new Map()

// можна використовувати будь-які типи даних для ключів :
map.set('1', 'str1')
map.set(1, 'num1')
map.set(true, 'bool1')

console.log(map.get(1)) // 'num1'
console.log(map.get('1')) // 'str1'
console.log(map.size) // 3


// можна використовувати об’єкти як ключі :
let kvitka = { name: "Квітка" }

let visitsCountMap = new Map()
visitsCountMap.set(kvitka, 123)

console.log(visitsCountMap.get(kvitka)) // 123


let recipeMap = new Map([
    ['огірок', 500],
    ['помідори', 350],
    ['цибуля', 50]
])

// перебираємо ключі (овочі) :
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable) // огірок, помідори, цибуля
}

// перебираємо значення (кількість) :
for (let amount of recipeMap.values()) {
    console.log(amount) // 500, 350, 50
}

// перебір елементів у форматі [ключ, значення]:
for (let entry of recipeMap) { // те ж саме, що recipeMap.entries()
    console.log(entry) // ['огірок', 500] і т.д.
}

// також має вбудований метод forEach :
recipeMap.forEach( (value, key, map) => {
    console.log(`${key}: ${value}`) // огірок: 500...
})



