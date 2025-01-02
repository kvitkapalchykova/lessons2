const fruits = []
fruits.push('Banana')
fruits.push('Orange')
fruits.push('Apple')
fruits.push('Mango')

const number = [1, 2, 3, 4, 5]

function fn(arr, flag = true){
    if(flag){
        const result = arr.shift()
        arr.push(result)
    }else{
        const result = arr.pop()
        arr.unshift(result)
    }
}

fn(fruits)
console.log(fruits)

fn(number)
console.log(number)

fn(fruits,false)
console.log(fruits)

fn(number, 0)
console.log(number)
