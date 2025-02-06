'use strict'

const numbers = [1, 2, 3, 4, 5]
const squared = numbers.map(num => num * num)

console.log(squared)


function createCounter() {
    let count = 0;

    return function() {
        return ++count;
    }
}
const counter = createCounter()
console.log(counter()) // 1
console.log(counter()) // 2

/* 
setTimeout(() => {
    console.log('спрацювало через 10 секунд!')
}, 10000);

setTimeout(() => {
    console.log('спрацювало через 15 секунд!')
}, 15000);
 */
jQuery('p').click(function(){
    $('p').addClass('red')
    // $(this).addClass('blue')

    // this.className = 'blue'
    // this.classList.toggle('green')
    $(this).toggleClass('green')
})

$('button').click(function(){
    $(this).hide()
})

const result = $('#result')
let text = ''

window.addEventListener("keydown", (e) => {
    
    text += e.key // сюди дописує

    result.html(text) // перезаписує

    console.log(text)
})