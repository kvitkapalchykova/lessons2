'use strict';

function Person(first, last, age, eye) {
    this.firstName = first
    this.lastName = last
    this.age = age
    this.eyeColor = eye
    this.changeName = function(name) {
        this.lastName = name
    }
    //this.nationality = "English"
}

const myFather = new Person("John", "Doe", 50, "blue")
const myMother = new Person("Sally", "Rally", 48, "green")

myFather.nationality = "English"
//Person.nationality = "English"

myMother.changeName("Doe")

console.log(Person)

console.log(myMother)
console.log(myFather)