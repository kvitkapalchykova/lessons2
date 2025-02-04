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

/* $("p").click(function(){
  $(this).hide();
}); */

/*$('strong').hover(function(){
    $(this).css('color', 'orange');
})

$('strong').click(function(){
    $(this).css('color', 'black');
})*/

// міняє колір на оранж при наведенні миші
document.querySelectorAll('strong').forEach(el => {

    el.addEventListener('mouseenter', function() {
        this.style.color = 'orange'
    })
})

// міняє колір на чорний при натисканні миші 
document.querySelectorAll('strong').forEach(el => {

    el.addEventListener('click', function(){
        this.style.color = 'black'
    })
})

// міняє колір на яскраво-зелений при відведенні миші від елементу
document.querySelectorAll('strong').forEach(el => {

    el.addEventListener('mouseout', function(){
        this.style.color = 'cyan'
    })

})