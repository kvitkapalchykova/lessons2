let a = 0;

if(a === '0'){ //варіанти 1, 0, -3
    console.log('Правильно!');
}else{
    console.log('Неправильно!');
}

if(a > 0){
    console.log('Правильно!');
}else{
    console.log('Неправильно!');
}

if(a <= 0){
    console.log('Правильно!');
}else{
    console.log('Неправильно!');
}

if(a !== 0){
    console.log('Неправильно!');
}else{
    console.log('Правильно!');
}

if(a === 'test'){ //'test','тест',3
    console.log('Правильно!');
}else{
    console.log('Неправильно!');
}


let x = "0";
switch (x){
    case 0:
        console.log("off");
        break;
    case 1:
        console.log("On");
        break;
    default:
        console.log("Значення не знайдено");//тому що строге порівняння
}

const secretNumber = '7';

if (Number(secretNumber) === 7){
    console.log('Вгадав строго');
}

if(secretNumber == 7){
    console.log('Вгадав не строго'); 
}