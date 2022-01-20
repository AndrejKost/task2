function isEven(n) {
    if ( typeof n === 'number') {
        return (n % 2 === 0);
    } else {
        throw new Error('parameter type is not a Number');
    }
};

console.log(isEven(''));