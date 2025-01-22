const fruit1 = []
fruit1[0] = 'яблучко'
fruit1[1] = 'грушка'
fruit1[2] = 'сливка'
fruit1[3] = 'персик'

const fruit2 = []
fruit2.push('банан')
fruit2.push('грушка')
fruit2.push('ківі')
fruit2.push('сливка')

function compareItems( el1, el2 ) {
    if (el1 === el2) {
        return 'співпадає: ' + el1 
    }else{
        return 'не співпадає: ' + el1 + ', ' + el2
    }
}

console.log( compareItems(fruit1[0], fruit2[0]))
console.log( compareItems(fruit1[1], fruit2[1]))
console.log( compareItems(fruit1[2], fruit2[2]))
console.log( compareItems(fruit1[3], fruit2[3]))
console.log( compareItems(fruit1[2], fruit2[3]))
console.log(fruit1)
console.log(fruit2)


function compare( el, arr) {
    
   for( let i = 0; i < arr.length; i++) {
        
        if( el === arr) {
            return `є таке співпадіння: ${el}`
        }else{
            return `немає такого співпадіння: ${el} , ${arr}`
        }
    }

}

console.log(compare('яблучко', fruit1[0]))
console.log(compare('яблучко', fruit1[1]))
console.log(compare('яблучко', fruit1[2]))
console.log(compare('яблучко', fruit1[3]))
console.log(compare('персик', fruit1[3]))

