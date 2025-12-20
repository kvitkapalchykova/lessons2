'use strict';

const log = console.log

// сума властивостей об'єкта :
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
log(sum) // 390

// примножуємо числові властивості obj на 2:
let menu = {
    width: 200,
    height: 300,
    title: "Моє меню"
};
function multyplyNumeric(obj) {
    for (let key in obj ) {
        if (typeof obj[key] ==='number') {
            obj[key] *= 2;
        }   
    }
}
multyplyNumeric(menu) 
log(menu)