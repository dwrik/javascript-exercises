const repeatString = function(string, number) {
    if (number < 0) return 'ERROR';
    let newString = '';
    while (number--) {
        newString += string;
    }
    return newString;
}

module.exports = repeatString
