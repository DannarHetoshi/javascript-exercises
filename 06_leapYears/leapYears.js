const leapYears = function(theYear) {

    if (theYear % 4 === 0 && theYear % 400 === 0) {
        return true
    } else if (theYear % 100 === 0) {
        return false
    } else if (theYear % 4 === 0) {
        return true
    } else {
        return false
    }
}
    // conditions
    // 
    // if divisible by 4 & 400 = leap year
    // 
    // else if divisible by 100 = not leap year
    // 
    // else if divisible by 4 = leap year
    //
    // else = not leap year

// Do not edit below this line
module.exports = leapYears;
