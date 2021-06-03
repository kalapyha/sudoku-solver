import React from 'react';
import { useGlobalContext } from '../../context/ContextProvider';

function Button() {
	const { solveSudokuBoard, isBtnDisabled, showSuccessMessage } =
		useGlobalContext();

	const handleClick = () => {
		solveSudokuBoard();
		showSuccessMessage();
	};
	return (
		<button
			data-testid="button"
			className="btn btn-primary"
			onClick={handleClick}
			disabled={isBtnDisabled && true}
		>
			Solve!
		</button>
	);
}

export default Button;
