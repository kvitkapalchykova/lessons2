// 'use strict'

const log = console.log

function getThis(){
    return this
}

console.log(getThis())

const obj = {
    name: 'Object 1',
    age: 42,
    getThis
}

console.log(obj.getThis())

console.dir(window)

console.dir(String)

console.dir(Number)

console.dir(console)

const obj2 = {
    name: 'Object 2',
    age: 18,
    getThis
}

console.log(obj2.getThis())

// this -- вказівник на поточний об'єкт

// глобальний об'єкт window
// window - document, window - console
// втрата this буває через втрату контексту, тобто втрата розуміння місцезнаходження 

