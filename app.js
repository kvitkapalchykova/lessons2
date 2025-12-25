'use strict';

const log = console.log

const wallet = {
    balance: 0,
    operations: [],
    //метод збільшення балансу:
    increase: function(sum, reason) {
        this.balance += sum;
        this.operations.push({
            reason: reason,
            sum: sum
        })
        return true;
    },
    //метод зменшення балансу:
    decrease: function(sum, reason) {
        if (this.balance < sum) {
            log('Недостатньо коштів');
            return false;
        }
        this.balance -= sum;
        this.operations.push({
            reason: reason,
            sum: -sum
        })
        return true;
    },
    //показує кількість операцій:
    getOperationLenght: function() {
        return this.operations.length;
    }
};

log(wallet.increase(1000, 'Заробітня плата')) // true
log(wallet.getOperationLenght()) // 1
//20 Недостатньо коштів
log(wallet.decrease(2000, 'Купити телефон')) // false
log(wallet.getOperationLenght()) // 1
log(wallet.decrease(500, 'Купити морозиво')) // true
log(wallet.getOperationLenght()) // 2
log(wallet.balance) // 500
log(wallet.operations)




