'use strict';

// якщо призначити тільки гетер (без сетера),властивість не можна змінювати :
const user = {
    name: "Тарас",
    surname: "Мельник",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
}

console.log(user.fullName)

user.fullName = "Аліса Бондар"

console.log(user.name)
console.log(user.surname)


//
const user2 = {
    name: "Іван",
    surname: "Іванов"
}

Object.defineProperty(user2, 'fullName', {
    get() {
        return `${this.name} ${this.surname}`;
    },

    set(value) {
        [this.name, this.surname] = value.split(" ");
    }
})

console.log(user2.fullName)

for (let key in user2) {
    console.log(key) // name, surname
}