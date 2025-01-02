const cars = []
cars.push('BMW')
cars.push('Audi')
cars.push('Opel')

const numbers = [1, 2, 3, 4, 5]

function fn(arr, flag = true){
    if(flag){
        const result = arr.pop()
        arr.unshift(result)
    }else{
        const result = arr.shift()
        arr.push(result)
    }
}

fn(cars)
console.log(cars)

fn(numbers)
console.log(numbers)

fn(cars, '')
console.log(cars)

fn(numbers, 0)
console.log(numbers)

// Цикли :
cars.forEach(car => console.log(car))

numbers.forEach(function(num){
    console.log(num)
})

let i = 0
while( i < cars.length ){
    console.log(cars[i])
    i ++
}

for( i = 0; i < 5; i++){
    console.log(numbers[i])
}

for(const car of cars){
    console.log(car)
}
    
