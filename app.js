// washing
// sweeping
// cleaning

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

function cleaning(rag, milf){
//використовуємо константу для швидшого виконання коду
    const wash = washing(rag);
    const sweep = sweeping(milf);
    
    if (wash && !sweep){
        return 'мию підлогу';
    }else if(sweep && !wash){
        return 'підмітаю';
    }else if(wash && sweep){
        return 'повне прибирання';
    }else{
        return "я нечемна,чоловік наб`є дупу "
    }

}

console.log(cleaning(true,false));//мию підлогу
console.log(cleaning(false,true));//підмітаю
console.log(cleaning(true,true));//повне прибирання
console.log(cleaning(false,false));//я нечемна, чоловік наб'є дупу


// функція, яка збирає вси решта
// main() 
// або cleaning()