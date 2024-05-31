const reverseString = function(str) {
    
    const reverseStr = str
        .split('')
        .reverse()
        .join('');
        
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
