const fibonacci = function(index) {

    if(index < 0 ) return 'OOPS'

    let result = 0;
    let prev = 0;

    for(let i = 0; i < index; i++) {
        if(result===0) {
            result ++;
        }
        else {
            result += prev;
            prev = result - prev;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = fibonacci;
