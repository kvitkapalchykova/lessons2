//спроба писати калькулятор
function plus(x,y){
    return(x + y);
}
 function minus(x,y){
    return(x - y);
 }
 function multy(x,y){
    return(x * y);
 }
 function divide(x,y){
    return(x / y);
 }
 function calc(x,y,z){
    if(z === '+'){
        return plus(x,y);
    }else if(z === '-'){
        return minus(x,y);
    }else if(z === '*'){
        return multy(x,y);
    }else if(z === '/'){
        return divide(x,y);
    }else{
        console.log('Error!');
    }
 }
 console.log(calc(1,3,'+'))//debug