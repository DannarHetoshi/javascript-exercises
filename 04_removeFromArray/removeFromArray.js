const removeFromArray = function(testArray, ...remValue) {
    let arrLen = remValue.length;
    let result = 0;
    for (i = 0; i < arrLen; i++) {
        console.log(remValue[i])
        if (testArray.includes(remValue[i]) === false) {
            continue;
        }
            result = testArray.indexOf(remValue[i]);
            testArray.splice(result, 1);
        }
    return testArray;
}

// Do not edit below this line
module.exports = removeFromArray;
