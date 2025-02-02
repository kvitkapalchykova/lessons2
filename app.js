'use strict'

const log = console.log 

// ванільний джаваскрипт, нативний
const par = document.querySelectorAll('p')
for(let i = 0; i<par.length; i++){
    par[i].className = 'red'
}
log(par)


// бібліотека джейквері
log($('p').addClass('blue'))
log($('p').removeClass('red'))

