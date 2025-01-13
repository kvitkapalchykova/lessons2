// за допомогою методу split() рядок можна перетворити в масив :
const userFullName = 'Пальчикова Світлана Вікторівна';
console.log(userFullName.split(' '));

// деструктуризація: вилучення даних із масивів
const [familyName, firstName, lastName] = userFullName.split(' ');
console.log(familyName)
console.log(firstName)
console.log(lastName)

// метод join(), який об'єднує всі елементи масиву в рядок :
const arr = ['Я', 'вивчаю', 'JS'];
console.log(arr.join(' '))
