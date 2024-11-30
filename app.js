const profession = 'програміст';

if(profession === 'програміст'){
    console.log('суперово!');
}else{
    console.log('не добре(');
}

if(profession === 'програміст'){
    console.log('суперово!');
}else if(profession === 'продавець'){
    console.log('непогано');
}else{
    console.log('йди вчися!');
}

const pets = 'Боня';

switch (true){
    case pets === 'Боня':
        console.log('наш грубий улюбленець)');
        break;
    case pets === 'Кіса':
        console.log('скажена губарівська Кісанька');
        break;
    case pets === 'Тузік':
        console.log('наша охорона))');
        break;
    default:
        console.log('заведи домашнього улюбленця!');
}
