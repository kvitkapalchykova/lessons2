// Методи рядків :

let text = 'Hello World';
// виводить потрібний символ рядка
console.log(text[0])
console.log(text[8])
// виводить 0 символ рядка
console.log(text.charAt(0))

// перетворює у верхній регістр
console.log(text.toUpperCase())
// нижній регістр
console.log(text.toLowerCase())

// як і в масиві, повертає довжину рядка 
console.log(text.length)

// показує першу позицію зазначеного тексту чи літери
console.log(text.indexOf('H')) // 0
// показує останнє входження тексту в рядок
console.log(text.lastIndexOf('o')) // 7
// виводить -1, якщо текст не знайдено
console.log(text.indexOf('p')) //-1

// повертає true, якщо рядок містить указане значення
console.log(text.includes('llo')) // true
// повертає true, якщо рядо починається з такого значення
console.log(text.startsWith('Hel'))
// повертає true, якщо рядок закінчується таким значенням
console.log(text.endsWith('orld'))

// витягує частину рядка та повертає витягнуту частину в новому рядку
let res = text.slice(5, 9)
console.log(res)
// витягує останні 5 значень в рядку
console.log(text.slice(-5))

// замінює вказане значення іншим значенням у рядку
let newText = text.replace('Hello', 'Goodbye')
console.log(newText)

// дублювання рядка
console.log(text.repeat(5))

// доповнюють рядок відступами на початку
console.log(text.padStart(20))
// доповнюють рядок в кінці(чим вказано)
console.log(text.padEnd(30, '*'))



// задача замаскувати карту
const card = '23428345034558353';
console.log(card.slice(-4).padStart(16, '*'));
