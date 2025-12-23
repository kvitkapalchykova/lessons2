'use strict';

const log = console.log

// клонування об'єкту :
let user = {
    name: "Ангеліна",
    age: 15
};
let clone = {};

for ( let key in user) {
    clone[key] = user[key];
    log( key + ': ' + clone[key]);
}

clone.age = 16; // значення змінено
log(clone)
log(user.age) // 15
log(clone.age) // 16 




