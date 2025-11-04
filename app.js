const log = console.log

let age = 17
/*let mesage = (age < 3) ? 'Привіт, крихітко!' :
    (age < 18) ? 'Вітаю!' :
    (age < 100) ? 'Моє шанування!' :
    'Який невизначений вік!';

log(mesage)*/

if(age < 3) {
    log('Привіт, крихітко!'); 
} else if(age < 18) {
    log('Вітаю!');
} else if(age < 100) {
    log('Моє шанування!');
} else {
    log('Який невизначений вік! ');
}

let nameJavaScript = 'ECMAScript';
if(nameJavaScript == 'ECMAScript') {
    log('Правильно!');
} else {
    log('Ви не знаєте? ECMAScript!');
}

let value = 1;
if(value > 0) {
    log(1);
} else if(value < 0) {
    log(-1);
} else {
    log(0);
} 

// використання умовного оператора замість умови if :
let a = 2;
let b = 3;
let result = (a + b < 4) ? 'Нижче' : 'Вище';
log(result)

let login = '';
let mesage = (login == 'Працівник') ? 'Привіт' :
    (login == 'Директор') ? 'Вітаю' :
    (login == '') ? 'Немає логіну' : 
     ' '

log(mesage)     