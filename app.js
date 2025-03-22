'use strict'
const log = console.log

// пошук елементів масиву :
const roles = ['user', 'admin', 'manager']

const elIndex = roles.indexOf('admin')
log(elIndex) // 1
const elIndex2 = roles.indexOf('superuser')
log(elIndex2) // -1

if(roles.indexOf('manager') >= 0) {
    log('Доступ є')
}

log(roles.includes('admin')) // true
log(roles.includes('superuser')) // false

if(roles.includes('admin')) {
    log('Доступ є')
}

// сортування масиву :
const arr = [1, 2, 3, 4, 5]

/*arr.sort(function(a, b) {
    return a - b;
})
log(arr)*/

arr.sort( (a, b) => b - a );
log(arr)

arr.reverse()
log(arr)

const result = arr.reduce( (sum, current) => sum + current, 0)
log(result) // 15

// перетворити на myShortString :
const str = 'my-short-string'

function camelize(str) {
    return str
        .split('-')
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slise(1)
        )
        .join('');
}
log(str) // ?

// трансформувати в масив імен :
const ivan = { name: "Іван", age: 25 }
const petro = { name: "Петро", age: 30 }
const mariya = { name: "Марія", age: 28 }

const users = [ ivan, petro, mariya ]
const names = users.map(item => item.name)
log(names) // ['Іван', 'Петро', 'Марія']

// трансформувати в об'єкти :
const ivan1 = { name: "Іван", surname: "Іванко", id: 1 }
const petro1 = { name: "Петро", surname: "Петренко", id: 2 }
const mariya1 = { name: "Марія", surname: "Мрійко", id: 3 }

const users1 = [ ivan1, petro1, mariya1 ]
const usersMapped = users1.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));
log(usersMapped)