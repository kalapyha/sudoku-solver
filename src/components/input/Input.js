import React, { useState } from 'react';
import { useGlobalContext } from '../../context/ContextProvider';
import { createBoard } from '../../utils/sudoku_solver';

function Input() {
	const { updateBoard, clearBoard } = useGlobalContext();

	const [input, setInput] = useState('');

	return (
		<div className="d-flex">
			<input
				type="text"
				placeholder="Create your own Sudoku. ex: ...1...2...7..4...23.."
				value={input}
				onChange={(e) => {
					// Validation
					const inputValue = e.target.value
						.replace(/[^1-9\.]/g, '')
						.slice(0, 81);
					setInput(inputValue);
				}}
			/>
			<button
				className="btn btn-primary"
				disabled={input.length === 81 ? false : true}
				onClick={() => {
					//Validate credentials
					updateBoard(createBoard(input));
					clearBoard();
				}}
			>
				Create
			</button>
		</div>
	);
}

export default Input;
