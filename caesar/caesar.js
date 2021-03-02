const caesar = function(string, shift) {

    let encrypted = '';
    alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');

    string.split('').forEach((char) => {

        let shiftedChar = '';
        if (char.match(/[a-zA-Z]/g)) {

            let isUpperCase = false;
            let charCode = char.charCodeAt(0);

            if (charCode >= 65 && charCode <= 90) {
                isUpperCase = true;
            }

            let base = (isUpperCase)? 65 : 97;
            let index = charCode - base;
            let shiftedIndex = index + shift;

            shiftedIndex = (shiftedIndex < 0)? (alpha.length + shiftedIndex) : (shiftedIndex % alpha.length);
            shiftedChar = (isUpperCase)? alpha[shiftedIndex].toUpperCase() : alpha[shiftedIndex];

        } else {
            shiftedChar = char;
        }

        encrypted += shiftedChar;
    });

    return encrypted;
}

module.exports = caesar
