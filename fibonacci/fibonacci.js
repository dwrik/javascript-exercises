const fibonacci = function(num) {
    if (typeof(num) == 'string') num = parseInt(num);
    if (num < 0) return 'OOPS';
    if (num < 2) return num;
    let a = 0;
    let b = 1;
    for (let i=2; i<=num; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}

module.exports = fibonacci
