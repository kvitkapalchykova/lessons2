'use strict'
const log = console.log

const audi = {
    make: 'Audi',
    model: 'A3',
    damages: [],
};

const carManipulation = {
    addDamage(part, rate) {
        this.damages.push({ part, rate});
        log(`Додати пошкодження на ${this.make} ${this.model}`)
    }
}

// метод bind, який запозичує метод :
const addDamageAudi = carManipulation.addDamage.bind(audi)

addDamageAudi('Крило', 3)
log(audi)