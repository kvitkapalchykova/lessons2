'use strict'

// методи, які шукають елементи з заданим тегом і повертають колекцію цих елементів :
const p = document.getElementsByTagName('p')

console.log(p)

const p1 = document.querySelectorAll('p')

console.log(p1)

p1.forEach(p => p.className='blue' )

//p.forEach(p => p.className='blue' )
for( let i = 0; i < p.length; i++) {
    
    p[i].classList.add('strong')
    p[i].classList.add('size20')
}

p[1].className='red'
p[2].classList.remove('strong')
