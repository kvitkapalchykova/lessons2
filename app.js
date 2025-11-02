const log = console.log

function powerOfTwo(num) {
    return num * num;
}
log(powerOfTwo(5))

const poft = (num) => num * num; 
log(poft(5))


function toPower(num, power){
    const res = num * power;
    return res;
}
log(toPower(2, 3))

const toPowerArrow = (num, power) => num * power
log(toPowerArrow(2, 3))

// comment