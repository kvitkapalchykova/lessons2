//функція "йдемо направо" яка повертає 1 або 0 :
function toLeft(go){
    if(go === 1){
        return 1;
    }else{
        return 0;
    }
}

//функція "йдемо наліво" яка повертає значення 2 або 0 :
function toRight(go){
    if(go === 2){
        return 2;
    }else{
        return 0;
    }
}

//функція, яка приймає значення цих функцій та виконується в залежності від умов :
function main(go){

    //створюємо масив 
    const array =[]
    //добавляємо в масив значення функцій за допомогою методу
    array.push(toLeft(go))
    array.push(toRight(go))

    console.log(array)

    for(let i = 0; i < array.length; 1++){
        console.log(array[i])
    }

   // array.forEach(arr => console.log(arr))

}

console.log(main(1))
console.log(main(2))
console.log(main(3))

console.log(toLeft(1))//1
console.log(toRight(2))//2