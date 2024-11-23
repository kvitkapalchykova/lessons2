const num = 6; // 10 hryven

switch (true){
    case num > 0:
        console.log('Позитивний');
        break;
    case num < 0:
        console.log('Негативний');
        break;
    default:
        console.log('Нуль!');        
}

switch(num){
    case 1: console.log('-1-'); break;
    case 2: console.log('-2-');break;
    case 3: console.log('3');break;
    case 4: console.log('4');break;
    case 5: console.log('5');break;
    case 6: console.log('-6-');break;
    case 7: console.log('7');break;
    case 8: console.log('8');break;
    case 9: console.log('9');break;
    case 10: console.log('10');break;
    default: console.log('num > 10')
}
/*
if(num>0){
    // якщо більше 0, то виконати цей код
} else if(num<0){
    // якщо менше нуля, то цей
} else {
    // або цей, якщо жодна умова не була виконана
}

const master = true

// num < 11
if(num <= 10){
    //  можна щось купити? якщо товар до 10 гривень включно
    if(master){
        // master work
    } else {
        // master go home!
    }
}
*/
const color = 'red'
/* 
if(color === 'red'){
    // exelent!!!
} else if(color === 'cyan'){
    // good!
} else if(color === 'green') {
    // normal
} else if(color === 'yellow'){
    // not bad...
} else {
    // fffu
}

if(color === 'red'){
    // exelent!!!
}
if(color === 'cyan'){
    // good!
}
if(color === 'green') {
    // normal
}
if(color === 'yellow'){
    // not bad...
} else {
    // fffu
} */

// const color = 'red'

switch (true){
    case color ==='red': 
        console.log('red')
        break;
    case color === 'cyan':
        console.log('cyan')
        break;
    case color ==='greeen':
        console.log('green')
        break;
    case color === 'yellow':
        console.log('yellow')
        break;
    default:
        console.log()
}