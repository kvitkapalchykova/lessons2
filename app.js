function refuel(fuel = false){
    if(fuel === true){
        return 1
    }else{
        return false 
    }
   //return fuel === true ? 1 : false
}

function getElectric(electric = false){
    return electric === true ? true : false
}

function startCar (alarms = false, keys = false){
    return alarms && keys === true ? true : false
}

function driveCar(wheel1 = false,wheel2 = false,wheel3 = false,wheel4 = false){
    return wheel1 && wheel2 && wheel3 && wheel4 === true ? true : false
}

function electronCar(electronics = false){
    return electronics === true ? true : false
}

function car(fuel,electric,alarms,keys,wheel1,wheel2,wheel3,wheel4,electronics){
    const ref = refuel(fuel)
    const electr = getElectric(electric)
    const start = startCar(alarms,keys)
    const drive = driveCar(wheel1,wheel2,wheel3,wheel4)
    const electron = electronCar(electronics)


    switch(true){
        case(ref && electr && start && drive && electron):
        return 'автомобіль у повній готовності - можна їхати';
        case(!ref && electr && start && drive && electron):
        return 'немає пального - треба заправитися';
        case(ref && electr && start && !drive && electron):
        return 'перевірити колеса';
        case(ref && start && drive && (!electr || !electron)):
        return 'пробеми з електрикою';
        case(ref && electr && !start && drive && electron):
        return 'автомобіль не відчиняється'
    }
}

console.log(car(1,true,true,true,true,true,true,true,true))//авто у повній готовносі
console.log(car(false,true,true,true,true,true,true,true,true))//немає пального
console.log(car(true,true,true,true,false,true,true,true,true))//перевірити колеса
console.log(car(true,false,true,true,true,true,true,true,true))//проблеми з електрикою
console.log(car(true,true,true,true,true,true,true,true,false))//проблеми з електрикою
console.log(car(true,true,true,false,true,true,true,true,true))//авто не відчиняється
console.log(car(true,true,false,true,true,true,true,true,true))//авто не відчиняється
console.log(refuel(true))


console.log('------')
//цикл в зворотньому порядку:
const arr = ['!', 'Котика', 'кохаю', 'Я'];
const resultArray = []

for(let i = arr.length -1; i >= 0; i--){
    console.log(arr[i])
    resultArray.push(arr[i])
}
//метод перетворення циклу в рядок
console.log(resultArray.join(' '))
//метод зміни елементів масиву в зворотньому порядку також записано у рядок
console.log(arr.reverse().join(' '))