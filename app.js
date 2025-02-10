'use strict'

const obj = {
    start: '<table>',
    temp: '',
    finish: '</table>',
    counter: 0,
    i: 1,
    array: [ 
        'Брати́ Гадю́кіни —', 
        'культовий український рок-гурт', 
        'створений влітку 1988 року у Львові', 
        'Був однією з перших українських рок-команд', 
        'що здобули широку популярність на теренах колишнього СРСР', 
        'За час свого існування', 
        'музичний колектив випустив 5 студійних альбомів', 
        '4 концертних альбоми та 2 збірки хітів', 
        'дав велику кількість концертів не лише в Україні', 
        'але й в країнах Європи і Північної Америки']
}

function objFunc(){

    if(obj.counter < obj.array.length){

        obj.temp += '<tr><td>' + obj.i + '</td><td>' + obj.array[obj.counter] + '</td></tr>'

        obj.i++

        obj.counter++
    }

    $('#output').html(obj.start + obj.temp + obj.finish)

    // console.log(obj.counter === obj['counter'])
}


// $('button').on('click', objFunc)

// $('h1').on('mouseover', objFunc)

// const A = document.querySelector.bind(document)
// console.log(A('button'))

document.querySelector('button').addEventListener('click', function(){

    if(obj.counter < obj.array.length){

        obj.temp += '<tr><td>' + obj.i + '</td><td>' + obj.array[obj.counter] + '</td></tr>'

        obj.i++

        obj.counter++
    }

    document.querySelector('#output').innerHTML = obj.start + obj.temp + obj.finish
})
