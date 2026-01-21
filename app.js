'use strict';

let ivan = { name: "Іван", surname: "Іванко", age: 25, id: 1 }
let petro = { name: "Петро", surname: "Петренко", age: 30, id: 2 }
let mariya = { name: "Марія", surname: "Мрійко",  age: 28, id: 3 }

let users = [ ivan, petro, mariya ]

let names = users.map(item => item.name)

let ages = users.map(item => item.age)

// створюємо масив з об'єктів :
let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}))

console.log(names) //["Іван", "Петро", "Марія"]
console.log(ages) //[25, 30, 28]
console.log(usersMapped) // [ { fullName: id: }]
console.log(usersMapped[0].id) // 1
console.log(usersMapped[0].fullName) // Іван Іванко


//приймаємо масив об'єктів та сортуємо за віком :
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

let ivanka = { name: "Іванка", age: 25 };
let petr = { name: "Петро", age: 30 };
let maryna = { name: "Марина", age: 28 };

let arr = [ petr, ivanka, maryna ]

sortByAge(arr)

console.log(arr[0].name) // Іванка(25)
console.log(arr[1].name) // Марина(28)
console.log(arr[2].name) // Петро(30)
