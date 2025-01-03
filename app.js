const fruits = ['Апельсин','Груша', 'Ківі', 'Яблуко']

const numbers = [1, 2, 3, 4, 5]

function  moveFirstToLast(arr){
    arr.push(arr.shift())
}

function moveLastToBeginning(arr){
    arr.unshift(arr.pop())
}

function fn(arr, flag = true){
   if(flag){
    return moveFirstToLast(arr)
   }else{
    return moveLastToBeginning(arr)
   }
}

fn(fruits,true)
console.log(fruits)

fn(fruits,false)
console.log(fruits)

fn(numbers,true)
console.log(numbers)

fn(numbers,false)
console.log(numbers)

