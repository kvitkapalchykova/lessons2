// washing
// sweeping
// cleaning
function washing(rag = true){
    if(rag){
        return 'добре';
    }else{
        return 'треба придбати ганчірку'
    }
}

function sweeping(milf = true){
    if (milf){
        return 'супер';
    }else{
        return 'треба придбати віник'
    }
}

function cleaning(rag, milf){
    const washing = washing();
    const sweeping = sweeping();
    
    if (washing()=== true){
        return 'мию підлогу';
    }else if(sweeping() === true){
        return 'підмітаю';
    }else if(washing() && sweeping()){
        return 'повне прибирання';
    }else{
        return "я нечемна,чоловік наб`є дупу "
    }

}

console.log(cleaning());//повне прибирання
console.log(washing());
console.log(sweeping());

// функція, яка збирає вси решта
// main() 
// або cleaning()