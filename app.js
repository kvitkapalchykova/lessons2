// Шаблонні рядки :
const projectName = 'сайт магазину';
const price = 2000;
const author = 'Квітка Пальчикова';

const template = author + ' замовила ' + projectName + ' за ціною ' + price + '$'
console.log(template);

const template2 = `${author} замовила ${projectName} за ціною ${price}$`
console.log(template2)

// спосіб переносу в стовпчик :
const template3 = 'Проєкт \n' + 'Ціна: ' + price + '$';
console.log(template3)

const template4 = `Проєкт
Ціна: ${price}$`;
console.log(template4)