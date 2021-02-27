const removeFromArray = function(array, ...elementsToRemove) {

    elementsToRemove.forEach(removeElement);

    function removeElement(num) {

        let index = array.indexOf(num);

        if (index >= 0) {
            array.splice(index, 1);
        }
    }

    return array;
}

module.exports = removeFromArray
