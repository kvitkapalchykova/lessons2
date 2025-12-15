'use strict';

const log = console.log

function showMessage(from, text) {
    from = '*' + from + '*'; // прикрашаємо 
    log( from + ': ' + text );
}

let from = "Ганна";

showMessage(from, "Привіт!")

log(from)

function checkAge(age) {
    // return (age > 18) ? log(true) : log("Батьки дозволили?");

     return (age > 18) || log("Батьки дозволили?");
}
checkAge(15)

// функція,яка повертає менше з двох чисел:
function min(a, b) {
    return (a < b) ? a : b;
}
log(min(2, -6))
