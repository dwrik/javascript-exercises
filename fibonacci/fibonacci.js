const fibonacci = function(num) {
    if (num < 0) return 'OOPS';
    if (num == 0) return 0;
    let a = 0;
    let b = 1;
    for (let i=1; i<num; i++) {
        const c = a + b;
        a = b;
        b = c;
    }
    return b;
}

module.exports = fibonacci
