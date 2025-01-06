/**відмінності та зона дії змінних:
 * 
 * змінна,яка оголошена на початку коду,яка може використовуватися у функції та поза неї зветься "глобальною".
 * 
 * змінна,яка оголошена у функції (в зоні фігурних дужок), стає недоспупною поза функцією та зветься "локальною"
 * 
 * 
 * 
 * 
 */

// 'use strict'- використовується суворий режим перевірки помилок

function add(a, b){
    return a + b;
}

function subtact(a, b){
    return a - b;
}

function power(a, b){
    return a ** b;
}
// глобальна змінна:
let res = true
console.log(res)

// функція вищого порядку з Callback 
function calculate(a, b, fn){
    res = fn(a, b);
    return res;
}

res = calculate(3, 5, add)
console.log(res)

res = calculate(3, 5, subtact)
console.log(res)

res = calculate(3, 5, power)
console.log(res)

{   
    // локальна змінна
    let res = 1
    console.log(res)
}

{   
    // локальна змінна
    const res = true
    console.log(res)
}