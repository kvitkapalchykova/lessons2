// Змінні та їх типи :

x = 5;//змінна без ключового слова 
console.log(x);//5 виконується!

const age = 39;//number
const name = 'Квітка';//string

let b;//змінна без типу
console.log(typeof b)//undefined

const y = false; // або true
console.log(typeof y);//booleaan

const value = null;//вкладене пусте значення
console.log(typeof value);//objekt

// перетврення(конвертація) типів:
let num = '18';
console.log(typeof num);//string

num = Number('18');
console.log(typeof num);//number

num = String(20);
console.log(typeof num);//string

const a = 7 + '1';//число + рядок ==
console.log(typeof a);//string