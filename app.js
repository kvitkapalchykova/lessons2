'use strict';

function unique(arr) {
    //поверне всі унікальні значення як масив:
    return Array.from(new Set(arr))
}

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", ":-0"]

console.log(unique(values))



function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // розділіть слово на літери, відсортуйте їх та знову з'єднайте
    let sorted = word.toLowerCase().split('').sort().join(''); 
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr))



let map = new Map()

map.set("name", "John")

let keys = Array.from(map.keys())

keys.push("more")

console.log(keys) // ['name', 'more']
