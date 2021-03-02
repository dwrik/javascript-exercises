const palindromes = function(string) {
    // ignores punctuation using regex
    // and only considers alphnumeric characters
    string = string.match(/[a-zA-Z0-9]/g).join('');
    reverse = string.split('').reverse().join('');
    // ignores case
    return string.toLowerCase() === reverse.toLowerCase();
}

module.exports = palindromes
