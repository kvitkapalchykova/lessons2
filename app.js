'use strict';

const user = { name: "Квітка" }
const admin = { name: "Пальчик" }

function sayHi() {
    console.log( this.name )
}
// використовуємо одну функцію для обох об'єктів : 
user.f = sayHi
admin.f = sayHi

user.f() // Квітка ( this == user )
admin.f() // Пальчик ( this == admin )
