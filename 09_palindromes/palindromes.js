const palindromes = function (str) {

    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz1234567890';

    const clearStr = str
        .toLowerCase()
        .split('')
        .filter((char) => alphanumerical.includes(char))
        .join('');

    const reverseStr = clearStr.split('').reverse().join('');

    return reverseStr === clearStr;
};

// Do not edit below this line
module.exports = palindromes;
