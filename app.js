'use strict';

const person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    get lang() {
        return this.language
    },
    set lang(lang) {
        this.language = lang.toUpperCase()
    },
    get fullName() {
        return this.firstName + " " + this.lastName
    }
} 

person.lang = "en"
console.log(person.language)
console.log(person.fullName)



const obj = { counter: 0 }

Object.defineProperty(obj, "reset", {
    get: function() { this.counter = 0 }
})
Object.defineProperty(obj, "increment", {
    get: function() { this.counter++}
})
Object.defineProperty(obj, "decrement", {
    get: function() { this.counter--}
})
Object.defineProperty(obj, "add", {
    set: function(value) { this.counter +=value }
})
Object.defineProperty(obj, "subtract", {
    set: function(value) { this.counter -= value }
})

console.log(obj)
console.log(obj.reset)
console.log(obj.add = 5)
console.log(obj.subtract = 1)
console.log(obj.increment)
console.log(obj.decrement)
console.log(obj.add = 2)