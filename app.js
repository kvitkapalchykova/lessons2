'use strict'
const log = console.log

// замикання :
function changeBalanse() {
    let balanse = 0;

    return function(sum) {
        balanse += sum;
        log(`Баланс: ${balanse}`);
    }
}

const change = changeBalanse()
change(100) // 100
change(-50) // 50
change(200) // 250


// замикання з об'єктами :
const userInfo = {
    balanse: 0,
    operations: 0,
    increse(sum) {
        this.balanse += sum;
        this.operations++;
    }
}

function user() {
    const userObj = {
        balanse: 0,
        operations: 0,
        increse(sum) {
            this.balanse += sum;
            this.operations++; 
        }
    };
    return function() {
        return userObj;
    }
}

const user1 = user()
user1().increse(100)
user1().increse(100)
log(user1())

const user2 = user()
user2().increse(100)
log(user2())