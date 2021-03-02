const palindromes = function(string) {
    processedString = string.match(/[a-zA-Z]/g).join('').toLowerCase();
    return (processedString
        .split('')
        .reverse()
        .join('') === processedString);
}

module.exports = palindromes
