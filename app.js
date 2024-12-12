//спроба написати калькулятор
function plus(x, y, z){
    z = '+';
    console.log(Number(x) + Number(y));
}
plus(1,1,'+');

function minus(x, y, z){
    z = '-';
    console.log(Number(x) - Number(y));
}
minus(4, 1, '-');

function multi(x, y, z){
    z = '*';
    console.log(Number(x) * Number(y));
} 
multi (2, 3, '*');

function divide(x, y, z){
    z = '/';
    console.log(Number(x) / Number(y));
}
divide(10, 2, '/');

function calk(plus, minus, multi, divide){
    switch(calk){
        case plus:
            console.log('Виконуємо додовання');
            break;
        case minus:
            console.log('Виконуємо віднімання');
            break;
        case multi:
            console.log('Виконуємо множення');
            break;
        case divide:
            console.log('Виконуємо ділення');
            break;
        default:
            console.log('Уважно, помилка!!!');
    }
}
//перевірка:
divide(2,1,);
calk();