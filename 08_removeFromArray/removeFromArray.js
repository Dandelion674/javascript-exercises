const removeFromArray = function(array, ...args) {
    return array.filter(value => !args.includes(value))
};

console.log(removeFromArray([1,2,3,4,5,6,7,8,9,0],5,8))

// Do not edit below this line
module.exports = removeFromArray;
