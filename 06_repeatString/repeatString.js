const repeatString = function(any,num) {
  let repeatedString = "";
  for (let i = 0; i < num; i++){
    repeatedString += any;
  }
  return repeatedString  
};

console.log(repeatString("hey", 5));

// Do not edit below this line
module.exports = repeatString;
