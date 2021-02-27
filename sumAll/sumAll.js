const sumAll = function(num1, num2) {

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR';
    }

    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    start = Math.min(num1, num2);
    end   = Math.max(num1, num2);

    let sumFromOneToStart = start * (start + 1) / 2;
    let sumFromOneToEnd   = end   * (end   + 1) / 2;

    return sumFromOneToEnd - sumFromOneToStart + start;
}

module.exports = sumAll
