//звичйна функція
function powerOfTwo(num){
    return num * num;
}
console.log(powerOfTwo(5)); //буде 25

//анонімна функція
const poft = function (num){
    return num * num;
}
console.log(poft(6)); //буде 36 

/*стрілкова функція
const poft = num => num * num;

console.log(poft(6)); */
