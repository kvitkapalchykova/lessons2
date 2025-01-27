// Math.min()
// Math.max()

const array = [1, 4, -88, 7, -23, 95, 54, -2, 76, 33, 90, -41]

/*
// 1 variant (optimal)
array.sort( (a,b) => a - b)

console.log(array[0], array[array.length-1])
*/

/////////////////////////
// 2 variant

function min(){
    // якщо крайні елемент масива є менший за передостанній
    if(array[array.length-1] < array[array.length-2]){
        // видаляємо передостанній
        array.splice(-2, 1) 

    // інакше 
    } else {
        // видаляємо крайній
        array.splice(-1, 1)
    }

    if(array.length > 1){
        min()
    } 
}

min()

console.log(array)
/*
//
function max() {
    if(array[array.length-1] > array[array.length-2]){
        array.splice(-2, 1) 
        // 
    } else {
        array.splice(-1, 1) 
        // 
    }
console.log(array)

    if(array.length > 1){
        max()
    } 
}
max()

console.log(array)
*/