const ftoc = function(newTemp) {
  let newTempCelc = ((newTemp-32)*(5/9));
  let ans = parseFloat(newTempCelc.toFixed(1))
  console.log(ans);
  return ans;
};

const ctof = function(newTemp) {
  let newTempFar = (newTemp*(9/5)+32);
  let ans = parseFloat(newTempFar.toFixed(1))
  console.log(ans);
  return ans;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
