const log = console.log

let item = 3;
switch(item) {
    case 1:
        log("item = 1");
    break;
    case 2:
        log("item = 2");
    break;
    case 3:
        log("item = 3");
    break;
    case 4:
        log("item = 4");
    break; 
    default:
        log("item інше значення");
}

let age = 15;
if( age >= 14 && age <= 90) {
    log('знаходиться між 14 - 90');
} else {
    log('інше значення');
}

if( age < 14 || age > 90) {
    log('не знаходиться між 14 - 90');
} else {
    log('число від 14 - 90'); 
}

if( !(age >= 14 && age <= 90) ) {
    log('не знаходиться 2 варіант')
}

