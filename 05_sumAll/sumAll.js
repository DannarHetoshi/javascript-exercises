const sumAll = function(numOne, numTwo) {
    let result = [];
    let answer = 0;
    if (numOne > 0 && typeof numOne === "number" && 
            numTwo > 0 && typeof numTwo === "number") {
        result = [numOne, numTwo].sort(function(a,b){return a-b});
        answer = ((result[1]-result[0]+1)*(result[1]+result[0]))/2;
    }
    /*if (typeof numOne === "number" && 
            typeof numTwo === "number") {
        result = [numOne, numTwo].sort(function(a,b){return a-b});
        answer = ((result[1]-result[0]+1)*(result[1]+result[0]))/2;
    }*/ else {
        answer = String("ERROR");    
    }
    console.log(answer);
    return answer;
}

// Do not edit below this line
module.exports = sumAll;
