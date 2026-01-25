'use strict';

// створення об'єкту звичайним способом:
const user1 = {
    name: "Kvitka"
}
// отримуємо повну інформацію про властивість :
let descriptor = Object.getOwnPropertyDescriptor(user1, 'name')

// конвертуємо об'єкт в рядок(стовпчик) :
console.log(JSON.stringify(descriptor, null, 2)) // усі прапори true



const user2 = {}
// створюється властивість name з хибними прапорами :
Object.defineProperty(user2, "name", {
    value: "Сергій"
})

let descriptor2 = Object.getOwnPropertyDescriptor(user2, 'name')

console.log(JSON.stringify(descriptor2, null, 2)) // усі прапори false


const user3 = {
    name: "Пальчик"
}

Object.defineProperty(user3, "name", {
    writable: false // заборона на зміну властивості
})

console.log(user3.name = "Сергій") // помилка - неможливо змінити властивість!
