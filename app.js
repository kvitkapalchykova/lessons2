//watering
// washing
// sweeping
// cleaning

function watering(flowers = false, water = false){
    if(flowers && water){
        return true;
    }else{
        return false;
    }

    //варіант тернарного оператора умови:
  // return flowers && water === true ? true : false
}

function washing(rag = false){
    //тернарний оператор може бути важкий для розуміння
    return rag === true ? true : false
}

function sweeping(milf = false){
    //для лаконічності коду ліпше використовувати булевий оператор
    if (milf){
        return true;
    }else{
        return false;
    }
}

function cleaning(rag, milf, flowers, water){
//використовуємо константу для швидшого виконання коду
    const wat = watering(flowers,water);
    const wash = washing(rag);
    const sweep = sweeping(milf);

    // console.log('debug:', wat, wash, sweep)

    switch(true){
    case (!wash && !sweep && wat):
        return 'тільки квіти полила';
    case (wash && !sweep && wat):
        return 'мию підлогу та поливаю квіти';
    case (sweep && !wash && wat):
        return 'підмітаю та поливаю квіти';
    case (wash && sweep && !wat):
        return 'повне прибирання, але квіти не политі';
    case (wash && sweep && wat):
        return 'все зроблено'
    case (!wash && !sweep && !wat):
        return "я нечемна,чоловік наб`є дупу "
    }
}
console.log(cleaning(false,false,true,true));//тільки квіти полила
console.log(cleaning(true,false,true,true));//мию підлогу та поливаю квіти
console.log(cleaning(false,true,true,true));//підмітаю та поливаю квіти
console.log(cleaning(true,true,false,true));//повне прибирання,але квіти не политі,бо немає квітів
console.log(cleaning(true,true,true,false))//повне прибирання, квіти не полила, бо немає води
console.log(cleaning(true,true,true,true))//все зроблено
console.log(cleaning(false,false,false,false));//я нечемна, чоловік наб'є дупу
console.log(watering(true,true))//якщо не передати параметри,то буде автоматично false,оскільки два параметра мають значення по замовчуванню false
console.log(cleaning())

// функція, яка збирає вси решта
// main() 
// або cleaning()