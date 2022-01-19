function f () {
    var res = 0;
for ( var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
        res = res + arguments[i];
        } else {
        throw new Error('all parameters type should be a Number');
        }
    }
    console.log(res);
}

f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number