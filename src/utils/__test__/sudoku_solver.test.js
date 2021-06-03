import { createBoard, findEmpty, validate } from '../sudoku_solver';
import { isValidBoard } from '../helpers';

const validBaord_4by4 = [
	['4', '.', '1', '.'],
	['.', '2', '.', '.'],
	['.', '.', '3', '.'],
	['.', '.', '2', '.'],
];

const inValidBaord_4by4 = [
	['4', '.', '1', '.'],
	['.', '2', '.', '.'],
	['.', '.', '3', '.'],
	['.', '.', '2', '2'],
];

describe('createBoard', () => {
	test('should have correct length', () => {
		expect(
			createBoard(
				'4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......'
			)
		).toHaveLength(9);

		expect(createBoard('4.....8.5.3.....', 4)).toHaveLength(4);

		expect(createBoard('4.....8.5.3.....', 4)).toContainEqual([
			'4',
			'.',
			'.',
			'.',
		]);
	});
});

describe('isValidBoard', () => {
	test('should be truthy', () => {
		expect(isValidBoard(validBaord_4by4)).toBeTruthy();
	});

	test('should be falsy', () => {
		expect(isValidBoard(inValidBaord_4by4)).toBeFalsy();
	});
});

// console.log(isValidBoard(validBaord_4by4));
