function f(num) {
    if ( typeof num === 'number') {
        res = num**3;
        console.log(res);
    } else {
        throw new Error('parameter type is not a Number');
    }
};

f(2);
//f('Content');



