const log = console.log

let i = 0;
while (i < 3) {
    log(i);
    i++;
}

let k = 0;
do {
    log(k);
    k++;  
} while (k < 3);

//вивести непарні значення:
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue
    log(i)
}

//вивести парні числа:
for (let i = 2; i <= 10; i++) {
    if(i % 2 == 0){
        log(i)
    }    
}




