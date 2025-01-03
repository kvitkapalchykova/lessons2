const f = true

// function expression (анонімна функція)
let fn = function(arr, flag = true){

}


function return4(x,y){
    return x + y
}

// function declaraion (іменована функція)
// фунція колбек (тестувальна)
function testReturn4(func, x, y){
    return func(x=0,y=0) * 2
} 

const resultTest = testReturn4(return4)

console.log(resultTest)

// this(диис) посилання на саму себе