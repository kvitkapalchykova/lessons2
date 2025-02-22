'use strict'

const user = {
    name: 'Kvitka',
    surname: 'Palchycova',
    age: 39,
    skills: [
        'Програмування',
        'Кулінарія'
    ],
    getFullName() {
        return this.name + ' ' + this.surname;
    }
};

user.sity = 'Харків'
console.log(user)
console.log(user.getFullName())

// ствоюємо порожній об'єкт із зазначеними об'єктом прототипом та властивостями
const user1 = Object.create(user)
console.log(user1)

// створюємо пустий об'єкт без прототипу
const user2 = Object.create(null)
console.log(user2)

// створюємо порожній безпечний об'єкт та додаєм йому властивості 
const user3 = {}
Object.defineProperty( user3, 'a', {
    value: 7,
    // якщо false === заборона 
    writable: true, // дозвіл змінювати значення властивості
    enumerable: true, // доступна властивість у циклах for
    configurable: true // дозвіл змінювати та видаляти властивості
} );
console.log(user3.a) // 7
user3.a = 10
console.log(user3.a) // 10
console.log(user3)


// метод, за допомогою якого створюємо властивості , а потім додаємо сеттер і геттер
const jar = {}
Object.defineProperties( jar, {
    'quantity': {
        value: 0,
        configurable: true
    },
    'cookies': {
        get() {
            return this.quantity;
        },
        set(value) {
            if ( value > 0 && value < 10 ) {
                Object.defineProperty(this, 'quantity', {value});
            }
        }
    }
});

console.log(jar.cookies)
jar.cookies = 5
console.log(jar.cookies)
//jar.quantity = 10
console.log(jar.cookies)