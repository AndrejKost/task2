function f(a,b,c) {
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
        var res = (a - b) / c;
        console.log(res);
    } else {
        throw new Error('all parameters type should be a Number');
    }
};

f(9,3,2);
f(1,'s',1);
