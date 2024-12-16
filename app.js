//watering
// washing
// sweeping
// cleaning

function watering(flowers = true, water = true){
    if(flowers && water){
        return true;
    }else{
        return false;
    }
}

function washing(rag = true){
    //тернарний оператор може бути важкий для розуміння
    return rag === true ? true : false
}

function sweeping(milf = true){
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
console.log(cleaning(false,false,true));//тільки квіти полила
console.log(cleaning(true,false,true));//мию підлогу та поливаю квіти
console.log(cleaning(false,true,true));//підмітаю та поливаю квіти
console.log(cleaning(true,true,false));//повне прибирання,але квіти не политі
console.log(cleaning(true,true,true))//все зроблено
console.log(cleaning(false,false,false));//я нечемна, чоловік наб'є дупу
console.log(watering())//true

// функція, яка збирає вси решта
// main() 
// або cleaning()