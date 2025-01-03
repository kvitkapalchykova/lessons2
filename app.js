const fruits = ['Апельсин','Груша', 'Ківі', 'Яблуко']

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


