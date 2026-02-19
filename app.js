'use strict';

// автокорекція :
let data = new Date(2013, 0, 32)// 32 січня не існує
console.log(data) // це 1 лютого 2013

// збільшимо дату на 2 дні :
data = new Date(2016, 1, 28)
data.setDate(data.getDate() + 2)
console.log(data) // 1 березня 2016

// збільшимо на 50 днів :
data = new Date()
data.setDate(data.getDate() + 50)
console.log(data) // 10 квітня 2026


data = new Date(2016, 0, 2) // 2 січня 2016
data.setDate(1) // встановити 1 день місяця
console.log(data)

data.setDate(0)
console.log(data) // 31 грудня, тому, що мін номер дня - 1,тому передбачається, що це останній день попереднього місяця


data = new Date()
console.log(+data) // об’єкт перетворюється на номер, він стає timestamp 

// швидший метод отримання timestamp : 
const d = Date.now()
console.log(d)


