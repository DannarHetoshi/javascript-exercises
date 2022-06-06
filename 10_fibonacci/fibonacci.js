const fibonacci = function(fib){
    let n = parseInt(fib);
    let arr = [0,1];
    if (n < 0) return "OOPS";
    if (n <= 2) return 1;
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n];
}
// Do not edit below this line
module.exports = fibonacci;
