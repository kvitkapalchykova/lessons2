const numbers = [10,20,30,40,50,60,70,80,90,100]

// додати в кінець
numbers.push(110)

// жорстко додано елемент у конкретний індекс
numbers[20] = 150

//жорстко додано елемент у конкретний індекс 
numbers[30] = 200

for(const number of numbers){
    console.log(number)
}

//видаляє та повертає крайнє значення масиву
let pop = numbers.pop()
console.log('крайній елемент масива: ', pop)

numbers.forEach(number => console.log(number))

// видаляє та повертає перше значення масиву
let shift = numbers.shift()
console.log('перший елемент масива:' , shift)

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}


// додає елемент на початок масива
numbers.unshift(0)

numbers.forEach(function(number){
    console.log(number)
})