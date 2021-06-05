import { createBoard, findEmpty, validate } from '../sudoku_solver';
import { isValidBoard } from '../helpers';

const validBoard_4by4 = [
	['4', '.', '1', '.'],
	['.', '2', '.', '.'],
	['.', '.', '3', '.'],
	['.', '.', '2', '.'],
];

const invalidBoardRow_4by4 = [
	['4', '.', '1', '.'],
	['.', '2', '.', '.'],
	['.', '.', '3', '.'],
	['.', '.', '2', '2'],
];

const invalidBoardColumn_4by4 = [
	['4', '.', '1', '.'],
	['.', '2', '.', '.'],
	['.', '.', '.', '1'],
	['.', '.', '4', '1'],
];

const invalidInnerBox_9by9 = [
	['5', '3', '.', '.', '7', '.', '.', '.', '.'],
	['6', '5', '.', '1', '9', '4', '.', '.', '.'],
	['.', '9', '8', '.', '.', '.', '.', '6', '.'],
	['8', '.', '.', '.', '6', '.', '.', '.', '3'],
	['4', '.', '.', '8', '.', '3', '.', '.', '1'],
	['7', '.', '.', '.', '2', '.', '.', '.', '6'],
	['.', '6', '.', '.', '.', '.', '2', '8', '.'],
	['.', '.', '.', '4', '1', '9', '.', '.', '5'],
	['.', '.', '.', '.', '8', '.', '.', '7', '9'],
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
		expect(isValidBoard(validBoard_4by4, 2)).toBeTruthy();
	});

	test('should be falsy', () => {
		expect(isValidBoard(invalidBoardRow_4by4, 2)).toBeFalsy();
	});

	test('should be falsy', () => {
		expect(isValidBoard(invalidBoardColumn_4by4, 2)).toBeFalsy();
	});

	test('should be falsy', () => {
		expect(isValidBoard(invalidInnerBox_9by9)).toBeFalsy();
	});
});
