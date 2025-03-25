'use strict'
const log = console.log

// функція скидання пароля :
function removePassword(reset) {
    if (reset) {
        this.password = undefined;
    } else {
        this.password = '1';
    }
}

const user = {
    login: 'kvitka.ua',
    password: '12345'
};

log(user)
// використовуєм bind() щоб примінити метод(функцію) до об'єкту user :
const resetUserPassword = removePassword.bind(user, true)
resetUserPassword()

log(user)
