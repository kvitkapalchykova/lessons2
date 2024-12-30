function getRating(a){
    switch(a){
        case 1:
            return 'дуже погано'
        case 2:
            return 'погано'
        case 3:
            return 'слабенько'
        case 4:
            return 'задовільно'
        case 5:
            return 'найвищий рівень'
        default:
            return 'спробуйте ще '
    }
}
console.log(getRating(1))
console.log(getRating(2))
console.log(getRating(3))
console.log(getRating(4))
console.log(getRating(5))
console.log(getRating(9))