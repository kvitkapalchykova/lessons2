// функція вищого порядку 
// повернення функції з функції

function power(pow) {
    return function(num) {
        return num**pow;
    }
}

const powerOfTwo = power(2)
console.log(powerOfTwo(5)) // 25
console.log(powerOfTwo(10)) // 100

const powerOfThree = power(3)
console.log(powerOfThree(5)) // 125

// короткий варіант визову функцій
console.log(power(2)(5)) // 25