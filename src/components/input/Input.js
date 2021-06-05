import React, { useState } from 'react';
import { useGlobalContext } from '../../context/ContextProvider';
import { isValidBoard, createBoard } from '../../utils/helpers';

function Input() {
	const { updateBoard, clearBoard, showErrorMessage } = useGlobalContext();

	const [input, setInput] = useState('');

	const handleClick = () => {
		if (!isValidBoard(createBoard(input))) {
			showErrorMessage();
		} else {
			updateBoard(createBoard(input));
			setInput('');
			clearBoard();
		}
	};

	const handleChange = (e) => {
		const inputValue = e.target.value.replace(/[^1-9.]/g, '').slice(0, 81);
		setInput(inputValue);
	};

	return (
		<div className="d-flex">
			<input
				data-testid="input"
				type="text"
				placeholder="Create your own Sudoku. ex: ...1...2...7..4...23.."
				value={input}
				onChange={handleChange}
			/>
			<button
				data-testid="input-btn"
				className="btn btn-primary"
				disabled={input.length === 81 ? false : true}
				onClick={handleClick}
			>
				Create
			</button>
		</div>
	);
}

export default Input;
