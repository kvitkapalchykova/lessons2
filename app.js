'use strict';

const styles = ["Jazz", "Blues"]
console.log(styles)
styles.push("Rock-n-Roll")
console.log(styles)
//Замініть значення в середині масиву на “Classics”. Ваш код для пошуку медіанного елемента має працювати для будь-яких масивів непарної довжини.
styles[Math.floor((styles.length -1) / 2)] = "Classics"
// styles[1] = "Classics"
console.log(styles)
console.log(styles.shift())
styles.unshift("Rap", "Reggae")
console.log(styles)


// перетворюємо рядок в масив та приміняємо цикл:
let names = 'Вася, Петя, Маша'
let arr = names.split(', ')

for (let name of arr) {
    console.log(`Повідомлення отримає ${name}.`)
}


let cars = [
    {model: "toyota", price: 1000},
    {model: "opel", price: 800},
    {model: "reno", price: 1200}
];
let res = cars.find(item => item.price < 1000)
// виводить перший потрібний елемент

console.log(res) // {model: "opel", price: 800}

let res2 = cars.filter(item => item.price < 1200)

console.log(res2) // виведе усі можливі варіанти, які підходять до умови < 1200


let array = [1, -2, 15, 2, 0, 8]
let resSort = array.sort((a, b) => a - b)

console.log(resSort)


function cameLize(str) {
    return str
    .split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('')
}

console.log(cameLize('my-long-word')) // myLongWord


// для копіювання масиву використовуємо slice() і тут же – сортування:
function copySorted(arr) {
    return arr.slice().sort()
}

let arr1 = ["HTML", "JavaScript", "CSS"]

let sorted = copySorted(arr1)

console.log(sorted)
console.log(arr1) // початковий масив залишився незміненим