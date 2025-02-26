'use strict'

const person = {
    firstName: 'John',
    lastName: 'Doe',
    language: '',
    set(lang) {
        this.language = lang;
    }
};

person.lang = 'en'
console.log(person.lang)
console.log(person)



const array = [ 1, 3, 'nums', function(){return 2}, person, null, { a: 'd'}]

console.log(array[3]())
console.log(array[4].lastName)
console.log(array[5])
console.log(array[6].a)
console.log(array[6]['a'])

console.log(array)

// отримати останні елементи :
console.log(array[array.length -1])
console.log(array.at(-1))
//метод pop() також повертає останній елемент масиву,але також змінює масив, видаляючи його :
console.log(array.pop())

// додаємо новий елемент в кінець :
console.log(array.push('Kvitka'))
//console.log(array[array.length] = 'Kvitka')

// пербір масиву за допомогою циклу :
for (let arr of array) {
    console.log(arr)
}

/*for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}*/

const num = [1,2,3,4,5]

// масиви реалізують метод toString, який повертає список елементів розділених комою :
console.log(String(num))

// в цьому прикладі масив також конвертується в рядок :
console.log([] + 1) // 1
console.log([2] + 1) // 21
console.log([1,2] + 1) // 1,21


const styles = ["Jazz", "Blues"]

styles.push("Rock-n-Roll")
styles[1] = "Classics"

// Замініть значення в середині масиву на “Classics”. Ваш код для пошуку медіанного елемента має працювати для будь-яких масивів непарної довжини.
styles[Math.floor((styles.length - 1) / 2)] = "Classics";

const elementStyles = styles.shift()
console.log(elementStyles)

styles.unshift("Rap", "Reggae")
console.log(styles)

const array1 = ['a', 'b']
array1.push(function() {
     return this;
     // alert(this) ?
})
console.log(array1[2]())