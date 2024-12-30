const colors = [];
colors.push('жовтий')
colors.push('блактиний')
colors.push(1)
colors.push(2)
colors.push(3)
colors[5] = 4
colors[6] = 5

const array = []
array.push(1)
array.push(2)
array.push(3)
array.push('trulala')

const alphabet = ['a', 'b', 'c', 'd']

// функція повинна міняти масив, який ти туди передаєш 
function moveFirstToLast(arr) {
    //видаляємо перший елемент масиву та повертаємо його
    const shift = arr.shift()
    //додаємо цей видалений елемент в кінець масиву
    arr.push(shift)
}

moveFirstToLast(alphabet)
console.log(alphabet)
moveFirstToLast(alphabet)
console.log(alphabet)
moveFirstToLast(array)
console.log(array)

// console.log(colors.push(getColors()))
/*let shift = colors.shift()
console.log(colors)

colors.push(shift)*/
// console.log(colors)