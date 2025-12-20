'use strict';

const log = console.log

function makeUser(name, age) {
    return {
        name,
        age,
    };
}

let user = makeUser("Квітка", 40);
log(user.name)
log(user.age)
//user = makeUser("Сергій", 48)
log(user)

//перевірка, чи існує властивість : 
log("age" in user) //true
log(user.name === undefined) //false, бо існує

for (let key in user) {
    log( user[key] ) // Квітка, 40
   // log( key ) name, age
}

// перевірка на порожній об'єкт :
function isEmpty(obj) {
    for (let key in obj) {
    //якщо цикл розпочався,властивість є:
        return false;
    }
    return true;
}
log( isEmpty() ) //true

let obj = {}
obj.time = "8:30"
log( isEmpty(obj) ) //false
