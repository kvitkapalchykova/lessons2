const months = ['січень','лютий','березень','квітень','травень','червень','липень','серпень','вересень','жовтень','листопад','грудень'];

const number = [10,20,30,40,50,60,70,80,90,100]


//спроба по памʼяті

number.forEach(num => console.log(num))

number.forEach(function(num){
    console.log(num);
})

for(let i = 0; i < number.length; i++ ){
    console.log(number[i]);
}

let i = 20;
while(i > 0){
    console.log(number[i])
    i--
}

for(const num of number){
    console.log(num)
}

