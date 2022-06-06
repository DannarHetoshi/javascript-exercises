const palindromes = function (phrase) {
    const answer = phrase.
        toLowerCase()
        .replace(/[^\w\s\']|_/g, "")
        .replace(/\s+/g, "")
        .split("");
    
    if (answer.join("") == answer.reverse().join("")) {
        console.log(answer.join(""))
        return true;
    }
    console.log(answer.join(""))
    return false;
};

// Do not edit below this line
module.exports = palindromes;
