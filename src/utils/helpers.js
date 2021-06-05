const getCol = (board, col) => {
	const column = [];
	for (let i = 0; i < board.length; i++) {
		if (board[i][col] !== '.') {
			column.push(board[i][col]);
		}
	}
	return column;
};

const getBoxCoordinates = (boxSize) => {
	// Assuming boxsize could be 2 or 3
	if (boxSize === 2) {
		return [
			[0, 0],
			[0, 2],
			[2, 0],
			[2, 2],
		];
	} else if (boxSize === 3) {
		return [
			[0, 0],
			[0, 3],
			[0, 6],
			[3, 0],
			[3, 3],
			[3, 6],
			[6, 0],
			[6, 3],
			[6, 6],
		];
	}
};

export const isValidBoard = (board, boxSize = 3) => {
	// Check Rows
	for (let i = 0; i < board.length; i++) {
		const rowArr = [];
		for (let j = 0; j < board.length; j++) {
			if (board[i][j] !== '.') {
				rowArr.push(board[i][j]);
			}
			if (rowArr.length !== Array.from(new Set(rowArr)).length) {
				return false;
			}
		}
		rowArr.length = 0;
	}

	// Check Columns
	for (let i = 0; i < board.length; i++) {
		const columnArr = getCol(board, i);
		if (columnArr.length !== Array.from(new Set(columnArr)).length) {
			return false;
		}
		columnArr.length = 0;
	}

	// Check Inner Boxes
	const boxesCoordinates = getBoxCoordinates(boxSize);
	for (const [boxRow, boxColumn] of boxesCoordinates) {
		const insideBox = [];
		for (let i = boxRow; i < boxRow + boxSize; i++) {
			for (let j = boxColumn; j < boxColumn + boxSize; j++) {
				if (board[i][j] !== '.') {
					insideBox.push(board[i][j]);
				}
			}
		}
		if (insideBox.length !== Array.from(new Set(insideBox)).length) {
			return false;
		}
		insideBox.length = 0;
	}

	return true;
};

export const createBoard = (str, size = 9) => {
	const board = [];
	for (let i = 0; i < str.length; i += size) {
		board.push(str.slice(i, i + size).split(''));
	}
	return board;
};
