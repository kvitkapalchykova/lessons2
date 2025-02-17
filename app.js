'use strict'

const user = {
    name: 'Kvitka',
    surname: 'Palchycova',
    age: 39,
    skills: [
        'Програмування',
        'Кулінарія'
    ],
    getFullName: function() {
        return this.name + ' ' + this.surname;
    }
};

console.log(user)
console.log(user.name)
console.log(user.skills[0])
console.log(user['skills'])

user.sity = 'Харків'
console.log(user)

console.log(user.getFullName())
