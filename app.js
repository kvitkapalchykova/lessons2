console.log(typeof '') //string
console.log(typeof "Kvitka") //string
console.log(typeof 5) //number
console.log(typeof 0) //number
console.log(typeof (3)) //number

let car
console.log(car); //undefined

car = undefined
console.log(typeof car) //undefined

let = null
console.log(typeof null) //objekt

let a = 16 + 'Volvo'
console.log(a); //16Volvo
console.log(typeof a); //string

let b = '16' + 'Volvo'
console.log(b); //16Volvo

let e = 'Volvo' + 16
console.log(e); //Volvo16

let c = 16 + 4 + 'Volvo'
console.log(c); //20Volvo

let d = 'Volvo' + 16 + 4
console.log(d); //Volvo164
console.log(typeof d); //string
