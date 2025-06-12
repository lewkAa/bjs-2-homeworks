"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let result;
	let descr = (Math.pow(b, 2) - 4 * a * c);
	if (descr === 0) {
		result = -b / (2 * a);
		arr = [result]
	}
	if (descr > 0) {
		let first = (-b + Math.sqrt(descr)) / (2 * a);
		let second = (-b - Math.sqrt(descr)) / (2 * a);
		arr = [first, second]
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let p = percent / 100 / 12;
	let s = amount - contribution;
	let monthPayment = s * (p + (p / (((1 + p) ** countMonths) - 1)));
	let total = monthPayment * countMonths;

	return total.toFixed(2);
}