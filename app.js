let age = 39;

function adultWebsite(a){
    if(a > 18){
        console.log('Доступ відкритий');
    }else{
        console.log('Немає доступу!')
    }
}
adultWebsite(40);//Доступ відкритий
adultWebsite(20);//Доступ відкритий

age = 16;
console.log(age);
adultWebsite(age);//Немає доступу!


let name
function myName(myname){
    name = myname;
    return name;
}
myName('Kvitka');
console.log(name);