// 'яблучко' -- нульовий елемент (нульовий індекс
const fruits = [ 'яблучко', 'грушка', 'банан', 'мандарин' ]

console.log('нульовий індекс, перший елемент: ', fruits.indexOf('яблучко')) // 0 (нульовий індекс, перший елемент)

const vegetables = [ 'бульба', 'морква', 'бурячок', 'цибуля' ]
const shopping = []

function combine ( arr1, arr2, arrReduce ) {

   /* for ( let i = 0; i < arr1.length; i++ ) {
        arrReduce.push(arr1[i], arr2[i])
    }*/

   /* let i = 0;
    while( i < arr1.length ) {
        arrReduce.push( arr1[i], arr2[i])
        i++
    }*/

    for( const el of arr1 ) {
        arrReduce.push( el, arr2[arr1.indexOf(el)])
    }

    return arrReduce
}

console.log( combine(fruits, vegetables, shopping))

for(const fruit of fruits){
    shopping.push(fruit, vegetables[fruits.indexOf(fruit)])
}
console.log(shopping)  
