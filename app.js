function toLeft(go){
    if(go === 1){
        return 1;
    }else{
        return 0;
    }
}

function toRight(go){
    if(go === 2){
        return 2;
    }else{
        return 0;
    }
}

function main(go){

    const array =[]
    array.push(toLeft(go))
    array.push(toRight(go))

    console.log(array)

    
    const go1 = toLeft(go)
    const go2 = toRight(go)

    switch(go){
        case 1: return 'йдемо направо';
        case 2: return 'йдемо наліво';
        default: 'стоїмо';
    }

}
console.log(main(1))
console.log(main(2))
console.log(main(3))

console.log(toLeft(1))//1
console.log(toRight(2))//2