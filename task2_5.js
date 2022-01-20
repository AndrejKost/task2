var inArr = [10, 2, -4, 3, -9, -1, 7];
var newArr = [], i;
function isPositive(n) {
    if ( typeof n === 'number') {
        return (n > 0) ? true : false;
    } else {
        throw new Error('parameter type is not a Number');
    }
};
//console.log(isPositive(''));
function createArr() {
    for ( i of inArr) {
        if (isPositive(i)){
            newArr.push(i);
        }
    }
    return newArr;
};
console.log(createArr(inArr));
