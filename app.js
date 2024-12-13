//спроба писати калькулятор
function plus(x,y){
    if(typeof x === 'number' && typeof y === 'number'){
        return x + y;
    }else{
        return 'це не число';
    }
}

 function minus(x,y){
    if(typeof x === 'number' && typeof y === 'number'){
        return x - y;
    }else{
        return 'це не число';
    }
 }

 function multy(x,y){
    if(typeof x === 'number' && typeof y === 'number'){
        return x * y;
    }else{
        return 'це не число';
    }
 }

 function divide(x,y){
    if(typeof z === 'number' && typeof y === 'number'){
        return x / y;
    }else{
        return 'це не число';
    }
 }

 function calc(x = 0,y = 0,z){

    if(z === '+'){
        return plus(x,y);
    }else if(z === '-'){
        return minus(x,y);
    }else if(z === '*'){
        return multy(x,y);
    }else if(z === '/'){
        return divide(x,y);
    }else{
        return "Це не математичний оператор!";
    }
 }
 console.log(calc(1, 3,'+'))//debug
 // варіанти помилок:
 console.log(calc(u, 7,'-'))//якщо увели невизначену змінну
 console.log(calc())//якщо не уведені параметри
 console.log(calc(1,'i','/'))//якщо замість одного числа увели іншу дію
 console.log(calc(2, 4,))//якщо не уведений математичний оператор
