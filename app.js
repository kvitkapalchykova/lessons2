function calculator(x, y, z){
    if(z === '+'){
        console.log(x + y)
    }else if(z === '-'){
        console.log(x - y)
    }else if(z === '*'){
        console.log(x * y)
    }else if(z === '/'){
        console.log(x / y)
    }else{
        console.log('Шукай помилку!')
    }
}

calculator(1, 1, '+');
calculator(2, 1, '-');
calculator(2, 2, '*');
calculator(1, 1, '/');
calculator(2, 3, '')

console.log(parseInt('ljg123'))