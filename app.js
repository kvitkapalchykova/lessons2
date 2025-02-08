// 'use strict'

const text = 'захоплення'
const array = text.split("")
console.log(array)

const rewerseArray = array.reverse()
console.log(rewerseArray)

const joinArray = rewerseArray.join('')
console.log(joinArray)


let newText = ""
for (let i = text.length-1; i >= 0; i--) {
    newText += text[i]
}
console.log(newText)