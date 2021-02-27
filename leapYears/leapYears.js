const leapYears = function(year) {

    let isLeap = false;

    if (year % 100 === 0 && year % 400 === 0) {
        isLeap = true;
    }

    if (year % 4 === 0 && year % 100 !== 0) {
        isLeap = true;
    }

    return isLeap;
}

module.exports = leapYears
