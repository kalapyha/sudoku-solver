const SIZE = 9;
const BOX_SIZE = 3;

const defaultBaord_9by9 = [
	['5', '3', '.', '.', '7', '.', '.', '.', '.'],
	['6', '.', '.', '1', '9', '5', '.', '.', '.'],
	['.', '9', '8', '.', '.', '.', '.', '6', '.'],
	['8', '.', '.', '.', '6', '.', '.', '.', '3'],
	['4', '.', '.', '8', '.', '3', '.', '.', '1'],
	['7', '.', '.', '.', '2', '.', '.', '.', '6'],
	['.', '6', '.', '.', '.', '.', '2', '8', '.'],
	['.', '.', '.', '4', '1', '9', '.', '.', '5'],
	['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

const emptyBaord_9by9 = [
	[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
];

const findEmpty = (board, size) => {
	for (let row = 0; row < size; row++) {
		for (let cell = 0; cell < size; cell++) {
			if (board[row][cell] === '.') {
				return [row, cell];
			}
		}
	}
	return null;
};

const validate = (num, position, board, size, boxSize) => {
	const [row, cell] = position;

	//Check columns
	for (let i = 0; i < size; i++) {
		if (board[i][cell] === num && i !== row) {
			return false;
		}
	}
	//Check row
	for (let i = 0; i < size; i++) {
		if (board[row][i] === num && i !== cell) {
			return false;
		}
	}

	//Check box
	const boxRow = Math.floor(row / boxSize) * boxSize;
	const boxColumn = Math.floor(cell / boxSize) * boxSize;

	for (let i = boxRow; i < boxRow + boxSize; i++) {
		for (let j = boxColumn; j < boxColumn + boxSize; j++) {
			if (board[i][j] === num && i !== row && j !== cell) {
				return false;
			}
		}
	}

	return true;
};

const solveSudoku = (array) => {
	//Deep copy of the array
	const board = JSON.parse(JSON.stringify(array));

	//Start timer
	const start = Date.now();

	const size = SIZE;
	const boxSize = BOX_SIZE;

	const solve = () => {
		const currPos = findEmpty(board, size);
		if (currPos === null) {
			return true;
		}

		//Logic
		//Board accepts numbers from 1 to size
		for (let i = 1; i < size + 1; i++) {
			const currNum = `${i}`;
			const isValid = validate(currNum, currPos, board, size, boxSize);
			if (isValid) {
				const [row, cell] = currPos;
				board[row][cell] = currNum;

				if (solve()) {
					return true;
				}
				board[row][cell] = '.';
			}
		}

		return false;
	};

	solve();
	const millis = Date.now() - start;
	return { board, time: millis };
};

export { solveSudoku, findEmpty, validate, defaultBaord_9by9, emptyBaord_9by9 };
