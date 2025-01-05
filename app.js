function add(a, b){
    return a + b;
}

function subtact(a, b){
    return a - b;
}

function power(a, b){
    return a ** b;
}

// функція вищого порядка Callback 
function calculate(a, b, fn){
    // Атрибут name використовується щоб задати назву параметру 
    console.log(fn.name);
    const res = fn(a, b);
    return res;
}

let res = calculate(3, 5, add)
console.log(res)

res = calculate(3, 5, subtact)
console.log(res)

res = calculate(3, 5, power)
console.log(res)