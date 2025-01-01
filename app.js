// Масиви :
// можна створити пустий масив, а потім додати значення
const fruits = []
fruits[0] = 'Banana'
fruits[1] = 'Orange'
fruits[2] = 'Apple'
fruits[3] = 'Mango'

console.log(fruits)

// показує кількість елементів масиву
let length = fruits.length 
console.log(fruits.length)

// показує перший елемент масиву
let fruit = fruits[0]
console.log(fruits[0])

// міняємо перший елемент на інший
fruits[0] = 'Lemon'
console.log(fruits)

// доступ до останнього елементу
let fruit1 = fruits[fruits.length - 1]
console.log(fruits[fruits.length -1])

// додає новий елемент в масив (вкінці)
fruits[fruits.length] = 'Kiwi'

console.log(fruits)