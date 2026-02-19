'use strict';

const data = new Date()

console.log(data) // показує поточну дату/час 

// години у поточному часовому поясі :
console.log(data.getHours())

//  години у часовій зоні UTC+0 (Лондонський час без літніх переводів часу):
console.log(data.getUTCHours())

// різниця між UTC та місцевим часовим поясом, у хвилинах:
console.log(data.getTimezoneOffset()) // -120

// Отримати рік (4 цифри) :
console.log(data.getFullYear()) // 2026

// Отримати місяць, від 0 до 11 :
console.log(data.getMonth()) // 1 (лютий)

// Отримати день місяця, від 1 до 31 :
console.log(data.getDate()) 

// день тижня, від 0 (неділя) до 6 (субота) :
console.log(data.getDay()) 

// отримати годину, хвилини, секунди, мілісекунди :
console.log(data.getHours())
console.log(data.getMinutes())
console.log(data.getSeconds())
console.log(data.getMilliseconds())

// повертає кількість мілісекунд з 1 січня 1970 року :
console.log(data.getTime())



// 0 означає 01.01.1970 UTC+0 :
let Jan01_1970 = new Date(0)
console.log(Jan01_1970)

// тепер додамо 24 години, отримаємо 02.01.1970 UTC+0 :
let Jan02_1970 = new Date(24 * 3600 * 1000)
console.log(Jan02_1970)

// 31 грудня 1969 року :
let Dec31_1969 = new Date(-24 * 3600 * 1000)
console.log(Dec31_1969)


// Один день (24 години) - це 86 400 000 мілісекунд :
const d = new Date(86400000)
console.log(d)
// Fri Jan 02 1970 03:00:00 GMT+0300 (за східноєвропейським стандартним часом) 


let now = new Date("2017-01-26")
now = new Date(2011, 0, 1, 0, 0, 0, 0)
now = new Date(2011, 0, 1)
now = new Date(2011, 0, 1, 2, 3, 4, 567)
console.log(now)

