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
    const array = []

    //добавляємо в масив значення функцій за допомогою методу
    array.push(toLeft(go))
    array.push(toRight(go))

    //метод, який фільтрує непотрібні елементи масиву та створює новий масив
    let newArray = array.filter(item => item !==0)
    
    console.log(newArray)

    //використовуємо swich, щоб виконати певний блок коду в залежності від заданої умови
    switch(go){
        case 1: return 'йдемо направо'
        case 2: return 'йдемо наліво'
        default: return 'стоїмо'
    }
}

console.log(main(1))
console.log(main(2))
console.log(main(0))
