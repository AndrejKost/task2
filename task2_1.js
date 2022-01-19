function f(num) {
    if ( typeof num === 'number') {
        res = num**3;
        console.log(res);
    } else {
        throw new Error('type is not a number')
    }
};

f(3);
//f('wow');



