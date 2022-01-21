var arr=[], i ;

function getDivisors(n) {
    if (typeof n === 'number' && n > 0) {
        for (i = 1 ; n >= i ; i++) {
            if ( n % i  === 0) {
                arr.push(i);
            }
        }
    console.log(arr);
    }
    else if (n === 0) {
        throw new Error ('parameter can\'t be a 0');
    }
    else {
        throw new Error ('parameter type is not a Number');
    }
};

getDivisors(12);
//getDivisors(0);
getDivisors('');
