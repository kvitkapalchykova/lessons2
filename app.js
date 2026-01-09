'use strict';

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Пальчик")

console.log(user.name)
console.log(user.isAdmin)

let user2 = new User("Квітка")
console.log(user2.name)
console.log(user)
console.log(user2)