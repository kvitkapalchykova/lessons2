const log = console.log

log(true == 1) //true
log(false == 0) //true
log(null == 0) //false
log(null === 0) //false
log(undefined > 0) //false
log(undefined < 0) //false
log(undefined == 0) //false
log(undefined == null) //true
log(undefined === null) //false
log(5 > 4) //true
log("ананас" > "яблуко") //false
log("2" > "12") //true
log(null == "\n0\n") //false
log(null === +"\n0\n") //false