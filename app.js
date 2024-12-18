const months = ['січень','лютий','березень','квітень','травень','червень','липень','серпень','вересень','жовтень','листопад','грудень'];

//forEach() -метод перебрати масив
months.forEach(month => console.log(month)); 

console.log('array.forEach')

months.forEach(function(month){
    console.log(month)
})

console.log('for: ')

let i = 100
// це різні перемінні 

// цикл (перебор)
for(let i = 0; i<12; i++){
    // це різні перемінні 
    console.log(months[i])
}

{
    let i = 200 // це різні перемінні 
}

console.log('add number')

for(let i = 0; i<=11; i++){
    // це різні перемінні 
    console.log(i, months[i])
}

console.log('кількість елемнетів масиву: ', months.length)

for(let i = 0; i<months.length; i++){
    // це різні перемінні 
    console.log(months[i])
}

console.log('перший елемент масива: ', months[0])

// костил - обмежив довжину масива до 3 елементів. якщо поствивит 0, то масив станепорожнім 
months.length = 3

console.log(months)

months.length = 15

console.log(months)

console.log(months[5])

console.log(typeof months)
