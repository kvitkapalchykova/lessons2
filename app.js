'use strict'
const log = console.log

const audi = {
    make: 'Audi',
    model: 'A3',
    year: 2021,
    damages: [],
    addDamage( part,rate ) {
        log(`У авто ${this.make} ${this.model} ${this.year} додано - пошкодження: ${part}, ступінь: ${rate}`)
        this.damages.push({
            part,
            rate
        })
    }
}
audi.addDamage('Капот',1)

const bmw = {
    make: 'BMW',
    model: 'X5',
    year: 2022,
    damages: [],
}

bmw.addDamage = audi.addDamage;
//bmw.addDamage('Бампер', 2)

const addDamageFunc = audi.addDamage;

// метод call приймає аргументи окремо :
addDamageFunc.call(bmw, 'Бампер', 2)

// метод apply приймає аргументи як масив :
addDamageFunc.apply(bmw, ['Капот', 1])
addDamageFunc.apply(audi, ['Бампер', 2])

