let fruits = ['апельсин','грушка', 'ківі', 'яблучко']
const colors = ['Помаранчевий', 'Жовтий', 'Зелений', 'Червоний']
const seasons = ['Зима', 'Весна', 'Літо', 'Осінь']
const tastes = ['Кислий', 'Терпкий', 'Солодкий', 'Гіркий']

// вирізаємо перший елемент у першого масива і вставляємо на початок другого
function f1(arr1, arr2){
    const result = arr1.shift()
    arr2.unshift(result.toUpperCase())
}

// вирізаємо крайній елемент у першого масива і вставляємо на кінець другого
function f2(arr1, arr2){
    arr2.push(arr1.pop())
}

// вирізаємо перший елемент у першого масива і вставляємо на кінець другого
function f3(arr1, arr2){
    arr2.push(arr1.shift())
}

// вирізаємо крайній елемент у першого масива і вставляємо на початок другого
function f4(arr1, arr2){
    arr2.unshift(arr1.pop())
}

f1(fruits, colors)
console.log(fruits)
console.log(colors)

f2(seasons, tastes)
console.log(seasons)
console.log(tastes)

f3(fruits, colors)
console.log(fruits)
console.log(colors)

f4(seasons, tastes)
console.log(seasons)
console.log(tastes)

// також можна виконати функцію, використавши тільки один масив
f4(seasons, seasons)
console.log(seasons)

// цикли для масиву  fruits та array :
// використовуємо метод, який повертає значення,перетворене у верхній регістр (велиими літерами)
const array = []
for(let i = 0; i < colors.length; i++){
    array.unshift(colors[i].toUpperCase())
}
console.log(array)

// властивість видалити усі елементи масиву
array.length = 0
console.log(array)

for(const el of fruits){
    array.push(el.toUpperCase())
}

console.log(array)

// Метод map() надає можливість створити новий масив на основі елементів існуючого, застосовуючи до кожного елемента певну функцію.
fruits = fruits.map(el => el.toUpperCase())

console.log(fruits)