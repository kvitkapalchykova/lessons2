const months = ['січень','лютий','березень','квітень','травень','червень','липень','серпень','вересень','жовтень','листопад','грудень'];

const number = [10,20,30,40,50,60,70,80,90,100]

console.dir(months)

function random(x = 0,y=0){
    return Math.random(x * y)
}

console.log(random(2,3))
console.log(random(2,3))
console.log(random(2,3))


months.forEach(month => console.log(month))

console.log('')

months.forEach(function(month){
    console.log(month)
})

console.log('')

/* 
function trulala(item){
    console.log(item)
}

months.forEach(trulala(item)) 
*/

number.forEach(num => console.log(num))

console.log('')

number.forEach(function(num){
    console.log(num * 2)
})

// функція, яка додає до ціни 10%
function plus10persent(price){
    return price / 100 * 10 + price
}

console.log('for: ')

for(let i = 0; i < number.length; i++){
    console.log(plus10persent(number[i]))
}

console.log('forEach: ')

number.forEach(num => console.log(plus10persent(num)))

console.log('while: ')

let i = 0
while(i < number.length){
    console.log(plus10persent(number[i]))
    i++
}

console.log('for of: ')

for(const num of number){
    console.log(plus10persent(num))
}