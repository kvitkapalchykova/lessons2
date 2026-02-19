'use strict';

// створити об’єкт Date на дату: 20 лютого 2012, 3:12 ранку (варіанти) :
let d1 = new Date("2012-02-20T03:12")
console.log(d1)

let d2 = new Date(2012, 1, 20, 3, 12)
console.log(d2)


// вивести день тижня літерами :
let d3 = new Date(2012, 0, 3) // 3 січня 2012

function getWeekDay(date) {
  const days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "НД"]
  return days[date.getDay()]
}
console.log(getWeekDay(d3)) // СР


// повернути “європейський” день тижня :
let d4 = new Date(2012, 0, 3)

function getLocalDay(date) {
  let day = date.getDay();

  if (day == 0) { // 0 (неділя) 7 по-європейськи
    day = 7;
  }

  return day;
}
console.log(getLocalDay(d4)) // вівторок, слід показати 2

