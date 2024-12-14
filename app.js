//зовнішні змінні в функціях взаємодіють:
let userName = 'Квітка';

function showMessage1(){
    let message = 'Привіт,' + userName;
    return message;
}
showMessage1();//Привіт,Квітка

//функція має повний доступ до зовнішньої змінної та може змінювати її:
 let userName1 = 'Світлана';

function showMessage(){
    userName1 = 'Сергій';//змінено зовнішню змінну

    /*let userName = 'Сергій' -якщо оголосити локальну змінну(let) у самій функції,то вона має перевагу та виконається всередині, а зовнішня змінна не зміниться(залишиться Світлана)*/ 

    let message = 'Здоровенькі були, ' + userName1;
    return message;
    return userName1; //проігноровано бо дія припиняється і наступний код не виконується
    let userName; //проігноровано
}

// console.log(userName1);//Світлана до оголошення функції 
// showMessage();//Здоровенькі були, Сергій
// console.log(showMessage());

// document.querySelector('p').innerText = userName1;

let p = document.querySelector('p')//спосіб вивести результат в документ
p.innerText = showMessage()

let h1 = document.querySelector('h1')
h1.innerText = showMessage1()

console.log(h1)
// console.log(userName1);//Сергій після оголошення функції
