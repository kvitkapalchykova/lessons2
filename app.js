'use strict';

let obj = {
    name: "Сергій",
    age: 49
}
// створюємо Map з об'єкта :
let map = new Map(Object.entries(obj))
 
console.log(map.get('name'))
console.log(map)


// трансформуємо масив пар [ключ, значення] в об’єкт:
let prices = Object.fromEntries([
    ['банан', 1],
    ['апельсин', 2],
    ['яблуко', 4]
])

// тепер prices = { банан: 1, апельсин: 2, яблуко: 4}
console.log(prices)
console.log(prices.апельсин) // 2


// конвертуємо Map в звичайний об'єкт :
let map2 = new Map()
map2.set('банан', 1)
map2.set('апельсин', 2)
map2.set('яблуко', 4)

let obj2 = Object.fromEntries(map2)

// obj2 = { банан: 1, апельсин: 2, яблуко: 4}
console.log(obj2)
console.log(obj2.апельсин) // 2


