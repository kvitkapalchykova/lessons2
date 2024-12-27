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

    //створюємо масив для значення, яке відібрано 
    // const result = []

    //створюємо змінну результату з числом
    let result = 0

    //відсортовуємо значення 0 в масиві та кладемо вже потрібне число в масив
    for(let i = 0; i < array.length; i++){
        if(array[i] !== 0){
            //result.push(array[i])

            //присвоюємо змінній result елемент масиву array
            result = array[i]
        }
        //метод, який фільтрує непотрібні елементи масиву 
       array.filter(function(arr){
        if(array[i] !== 0){
            console.log(array[i])
        }

       })
     // array.filter(arr => array[i] !== 0)
      //console.log(array[i])
        


    }

    //console.log(result)

    //використовуємо swich, щоб виконати певний блок коду в залежності від заданої умови
    switch(result){
        case 1: return 'йдемо направо'
        case 2: return 'йдемо наліво'
        default: return 'стоїмо'
    }
}

console.log(main(1))
console.log(main(2))
console.log(main(3))
