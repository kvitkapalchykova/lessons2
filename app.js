'use strict';

let animal = {
    jumps: null
}

let rabbit = {
    __proto__: animal,
    jumps: true
}

console.log(rabbit.jumps) // true, береться з rrabit

delete rabbit.jumps

console.log(rabbit.jumps) // null, береться з animal

delete animal.jumps

console.log(rabbit.jumps) // undefined, більше немає такої властивості

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

console.log(pockets.pen) // 3
console.log(bed.glasses) // 1
console.log(table.money) // undefined