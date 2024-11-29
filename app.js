function logName(name, surname){
    console.log(`Моє ім'я ${name} ${surname}`);
}
logName('Світлана', 'Пальчикова');

function countDepositSum(depositInUSD, month, rate){
    const sum = depositInUSD * (1 + rate / 12) ** month;
    return sum;
}

const example1 = countDepositSum(1000, 24, 0.12);
console.log(example1);

console.log(countDepositSum(1000, 48, 0.10));

