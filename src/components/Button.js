import React from 'react';
import { useGlobalContext } from '../context/ContextProvider';

function Button() {
	const { solveSudokuBoard, toggleLoading } = useGlobalContext();

	const handleClick = (e) => {
		e.preventDefault();
		toggleLoading();
		//solveSudokuBoard();
	};
	return (
		<button
			className="btn btn-success"
			onClick={(e) => {
				handleClick(e);
			}}
		>
			Solve!
		</button>
	);
}

export default Button;
