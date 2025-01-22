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

function compare( word, arr ) {
    // створюємо перемінну з пустим значенням,в яку будуть додаватися відповідні результати умови if :
    let string = ''
    
   for( let i = 0; i < arr.length; i++) {
        
        if( word === arr[i]) {
            string += `є таке співпадіння: ${word} \n`
            // string = string + `є таке співпадіння: ${word} \n`
        } else {
            string += `немає такого співпадіння: ${word} - ${arr[i]}\n`
            // string = string + `немає такого співпадіння: ${word} - ${arr[i]}\n`
        }
    }
    return string

}

console.log(compare('яблучко', fruit1))
console.log(compare('грушка', fruit1))
console.log(compare('персик+', fruit1))
console.log(compare('ківі', fruit2))
