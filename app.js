'use strict';

let hamster = {
    stomach: [],
    eat(food) {
        this.stomach.push(food)
    }
}

let speedy = {
    __proto__: hamster,
    stomach: []
}

let lazy = {
    __proto__: hamster,
    stomach: []
}
// Хом’ячок `Speedy` знайшов їжу
speedy.eat("яблуко")
console.log(speedy.stomach)

//  Шлунок хом’ячка `Lazy` пустий
console.log(lazy.stomach)

lazy.eat("грушка")
console.log(lazy.stomach)