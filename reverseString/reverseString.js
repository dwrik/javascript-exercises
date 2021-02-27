const reverseString = function(string) {

    let reverse = '';
    chars = string.split('');
    chars.forEach((char) => reverse = char + reverse);

    return reverse;
}

module.exports = reverseString
