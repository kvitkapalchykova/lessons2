// метод forEach()
const score = [5, 10, 0, 15];

score.forEach((scoreEl, i) => {
    console.log(`Раунд ${i + 1}: ${scoreEl}`);
})

// Раунд 1: 5
// Раунд 2: 10
// Раунд 3: 0
// Раунд 4: 15

// цикл for/of як перший варіант конвертації долара в гривні
const transactionInUSD = [10, -7, 50, -10, 100];
const transactionInUAH = []
for (const transaction of transactionInUSD) {
    transactionInUAH.push(transaction * 40);
}

console.log(transactionInUSD)
console.log(transactionInUAH)

// метод map(), який повертає новий масив та виконує певну функцію
const transactionInUAH2 = transactionInUSD.map(transaction => transaction * 40)


console.log(transactionInUSD)
console.log(transactionInUAH2)

// перший метод перебрати масив та відібрати позитивні операції з нього, поклавши вновий масив за допомогою for/of
const operations = [100, -20, 7, -20, 50];
const positiveOperations = [];
for (const operation of operations) {
    if (operation > 0) {
        positiveOperations.push(operation);
    }
}
console.log(positiveOperations)

// метод filter(),який фільтрує та залишає потрібні нам елементи в новому масиві
const positiveOperations2 = operations.filter(operation => {
    return operation > 0;
})
console.log(positiveOperations2)