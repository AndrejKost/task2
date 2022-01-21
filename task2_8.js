//var arr = 'asdf';
var arr = [2,3,4];
function f(n) {
    if (Array.isArray(n) && n.length && typeof n[0] === 'number') {
         console.log(n[0]);
         arr.splice(0, 1);
        if (n.length) {
            f(n);
        }
    } else if (!n[0]) {
        throw new Error ('parameter can\'t be an empty');
    } else if (typeof n === 'string') {
        throw new Error('parameter type should be an array');
    }
};

f(arr);

