const fruit = [ 'яблучко', 'грушка', 'банан', 'мандарин']
const vegetables = [ 'бульба', 'морква', 'бурячок', 'цибуля']
const shopping = []

function combine ( arr1, arr2, arr3 ) {

    for ( let i = 0; i < arr1.length; i++ ) {
        arr3.push(arr1[i], arr2[i])
    }
    return shopping
}
console.log( combine(fruit, vegetables, shopping))
console.log(shopping)