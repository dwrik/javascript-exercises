function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	return array.reduce((sum, curr) => sum += curr, 0);
}

function multiply (array) {
	return array.reduce((prod, curr) => prod *= curr, 1);
}

function power(a, b) {
	return a ** b;
}

function factorial(num) {
	let fact = 1;
	for (let i=num; i>=1; i--) {
		fact *= i;
	}
	return fact;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}