import { createBoard, findEmpty, validate } from '../sudoku_solver';

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
