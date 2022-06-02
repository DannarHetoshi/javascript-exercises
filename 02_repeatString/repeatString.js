const repeatString = function(testString, testNum) {
    if (testNum < 0) return 'ERROR';
    let string = '';
    for (let i = 0; i < testNum; i++) {
        string += testString;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
