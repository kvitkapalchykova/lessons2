
const arr1 = [1,2,3,4,5]
const arr2 = ['1 true', '2 false', '3 undefined', '4 null']

function fn(arr, flag = true){
    if(flag){
        const element = arr.shift()
        arr.push(element)
    }else{
        const element = arr.pop()
        arr.unshift(element)
    }
}
// по замовчуванню true (можна не писати)
fn(arr1) // flag === true
console.log(arr1)

fn(arr2,false)
console.log(arr2)

// тому що 1 конвертується в true
fn(arr2, 1) // flag === true
console.log(arr2)

// тому що пустий рядок є false
fn(arr2,'') // flag === false
console.log(arr2)

// NaN не число, отже немає значення (false)
fn(arr1, NaN) // flag === false
console.log(arr1)

// також 0 не має значення ,отже false
fn(arr1, 0) // flag === false
console.log(arr1)

// undefined не має значення -також false
fn(arr2, undefined) // flag === false
console.log(arr2)