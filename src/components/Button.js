import React from 'react';
import { useGlobalContext } from '../context/ContextProvider';

function Button() {
	const { solveSudokuBoard, isBtnDisabled } = useGlobalContext();

	return (
		<button
			className="btn btn-success"
			onClick={solveSudokuBoard}
			disabled={isBtnDisabled && true}
		>
			Solve!
		</button>
	);
}

export default Button;
