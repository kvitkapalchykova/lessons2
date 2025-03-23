'use strict'
const log = console.log

// використання this в об'єктному літералі:
function makeUser() {
    return {
        name: "Сергій",
        ref() {
            return this;
        }
    };
}

let user = makeUser();

log(user.ref().name) // Сергій

// 
const calkulator = {
    read() {
         this.a = +prompt( 'перше число?', 0 );
         this.b = +prompt( 'друге число?', 0 );
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
};

calkulator.read()
log(calkulator.sum())
log(calkulator.mul())

// ланцюг викликів :
// об'єкт ladder дозволяє підійматися вгору-вниз :
const ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() { // показує поточний крок
        alert( this.step );
        return this;
    }
};

/*log(ladder.up())
log(ladder.up())
log(ladder.down())
log(ladder.showStep())
log(ladder.down())
log(ladder.showStep())*/

ladder
    .up()
    .up()
    .down()
    .showStep()
    .down()
    .showStep()