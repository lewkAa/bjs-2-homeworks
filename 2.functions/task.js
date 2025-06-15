'use strict';

function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
		sum += arr[i];
	}
	const avg = Number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {

	const result = arr.reduce(
		(acc, current) => {
			acc.sum += current;
			return acc;
		}, {
			sum: 0
		}
	);
	return Number(result.sum);
}

function differenceMaxMinWorker(...arr) {

	const result = arr.reduce(
		(acc, current) => {
			if (current < acc.min) acc.min = current;
			if (current > acc.max) acc.max = current;
			acc.sum += current;
			return acc;
		}, {
			min: Infinity,
			max: -Infinity
		}
	);

	if (arr.length < 2) return 0;

	let diff = result.max - result.min;
	return diff;

}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) return 0;

	const result = arr.reduce(
		(acc, current) => {
			if (current % 2 === 0) {
				acc.sumEvenElement += current;
			} else {
				acc.sumOddElement += current;
			}
			return acc;
		}, {
			sumEvenElement: 0,
			sumOddElement: 0
		}
	);

	return result.sumEvenElement - result.sumOddElement;
}

function averageEvenElementsWorker(...arr) {

	if (arr.length === 0) return 0;

	const result = arr.reduce(
		(acc, current) => {
			if (current % 2 === 0) {
				acc.sumEvenElement += current;
				acc.countEvenElement++;
			}
			return acc;
		}, {
			sumEvenElement: 0,
			countEvenElement: 0
		}
	);

	return Number(result.sumEvenElement / result.countEvenElement);

}

function makeWork(arrOfArr, func) {
	if (arrOfArr.length === 0) return 0;

	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const currentResult = func(...arrOfArr[i]);
		if (currentResult > maxWorkerResult) {
			maxWorkerResult = currentResult;
		}
	}

	return maxWorkerResult;
}