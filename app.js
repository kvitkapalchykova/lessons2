function toGo1(road1){
    if(road1 = 1){
        return 1;
    }else{
        return 0;
    }
}

function toGo2(road2){
    if(road2 = 2){
        return 2;
    }else{
        return 0;
    }
}

function main(road1, road2){
    const go1 = toGo1(road1)
    const go2 = toGo2(road2)

    if(go1 && !go2){
        return 'йдемо направо';
    }else if( !go1 && go2){
        return 'йдемо наліво';
    }else{
        return 'стоїмо';
    }

}
console.log(main(1,0))
console.log(main(0,2))
console.log(main(0,0))

console.log(toGo1())//1
console.log(toGo2())//2