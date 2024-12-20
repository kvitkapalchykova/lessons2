const numbers = [10,20,30,40,50,60,70,80,90,100]

// this  - вказує на саме ʼцейʼ об'єкт
// the | a

// map, set, weekmap, weekset 
// prototype 

/* 
function trulala(){
    return this
}

console.log(typeof trulala(), this)
 */

console.log(numbers)
//видаляє вкінці, після 5-го, 3 елемента 
numbers.splice(5, 3)

console.log(numbers)
//додає після 6-го такі значення
numbers.splice(6, 0, 200, 210, 220, 230)

console.log(numbers)
//додає в кінець елементи
numbers.splice(-1, 0, 300, 310, 320)

console.log(numbers)
//додає в кінець елементи
numbers.splice(numbers.length, 0, 400, 410, 420, 430)

console.log(numbers)