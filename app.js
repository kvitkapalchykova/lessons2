'use strict';

// Збережемо прочитані повідомлення у WeakSet:
let messages = [
  {text: "Привіт", from: "Сергій"},
  {text: "Як справи?", from: "Квітка"},
  {text: "До зустрічі", from: "Аліса"}
]

let readMessages = new WeakSet()

//були прочитані два повідомлення :
readMessages.add(messages[0])
readMessages.add(messages[1])
//... знову прочитаємо перше повідомлення :
readMessages.add(messages[0])
//readMessage все ще має 2 унікальних елементів

console.log("Прочитано повідомлення 0:" + readMessages.has(messages[0])) // true

messages.shift()
//зараз readMessages має 1 елемент (з технічної точки зору пам’ять може бути очищена пізніше)
