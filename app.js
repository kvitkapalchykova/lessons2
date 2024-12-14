//зовнішні змінні в функціях взаємодіють:
let userName = 'Квітка';

function showMessage(){
    let message = 'Привіт,' + userName;
    console.log(message);
}
showMessage();//Привіт,Квітка

//функція має повний доступ до зовнішньої змінної та може змінювати її:
let userName = 'Світлана';

function showMessage(){
    userName = 'Сергій';//змінено зовнішню змінну

    /*let userName = 'Сергій' -якщо оголосити локальну змінну(let) у самій функції,то вона має перевагу та виконається всередині, а зовнішня змінна не зміниться(залишиться Світлана)*/ 

    let message = 'Здоровенькі були, ' + userName;
    console.log(message);
}
console.log(userName);//Світлана до оголошення функції 
showMessage();//Здоровенькі були, Сергій
console.log(userName);//Сергій після оголошення функції
