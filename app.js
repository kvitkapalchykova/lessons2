const log = console.log

// Перетворення типу :
log("" + 1 + 0) // "10"
log("" - 1 + 0) // -1
log(true + false) // 1
log(6 / "3") // 2
log("2" * "3") // 6
log(4 + 5 + "px") // "9px"
log("$" + 4 + 5) // "$45"
log("4" - 2) // 2
log("4px" - 2) // NaN
log(" -9 " + 5) // " -9 5"
log(" -9 " - 5) // -14
log(null + 1) // 1
log(undefined + 1) // NaN
log(" \t \n "- 2) // -2