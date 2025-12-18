'use strict';

const log = console.log

const fruit = ['яблуко', 'груша', 'банан']
const colors = ['червоний', 'зелений', 'жовтий']
const shopping = []

function add( arr1, arr2, arr3 ) {
    for (let i = 0; i < arr1.length; i++) {
        arr3.push( arr1[i], arr2[i] )
    }
}
add(fruit, colors, shopping) 

log(shopping)
log(shopping.length)
log(shopping[shopping.length-1])
log(shopping[3])
shopping[shopping.length] = 'ківі'
shopping.unshift('ананас')
let shop = shopping.shift()
log(shop)
shopping[0] = 0

shopping.splice(2, 0, 2)
log(shopping)
log(shopping.toString())



