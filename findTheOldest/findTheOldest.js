let findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        current.yearOfDeath = current.yearOfDeath ?? new Date().getFullYear();
        return (oldest.yearOfDeath - oldest.yearOfBirth 
            > current.yearOfDeath - current.yearOfBirth)? oldest : current;
    }, {
        yearOfBirth: 0,
        yearOfDeath: 0,
    });
}

module.exports = findTheOldest
