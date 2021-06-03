export const isValidBoard = (board) => {
	const tempArr = [];

	// Check Rows
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board.length; j++) {
			if (board[i][j] !== '.') {
				tempArr.push(board[i][j]);
			}
			if (tempArr.length !== Array.from(new Set(tempArr)).length) {
				return false;
			}
		}
		tempArr.length = 0;
	}

	return true;
};
