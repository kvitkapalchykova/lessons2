'use strict'

// простий приклад використання замикання
function outerFunction() {
    const outerVariable = 'Привіт, я змінна із зовнішньої функції !'

    function innerFunction() {
        console.log(outerVariable)
    }
    return innerFunction
}

const myFunction = outerFunction()
myFunction()


// лічильник за допомогою замикання
function createCounter() {
    let count = 0

    return function() {
        count++
        console.log(count)
    }
}

const counter = createCounter()
counter() // 1
counter() // 2

// ще варіант замикання
function outer() {
    const message = 'Hello, '

    function inner(name) {
        console.log(message + name)
    }
    return inner
}

const greet = outer()
greet('Kvitka')
greet('Palchyk')