import React from 'react';

function Input() {
	return (
		<div className="d-flex">
			<input
				type="text"
				placeholder="Create your own Sudoku. ex: ...1...2...7..4...23.."
			/>
			<button className="btn btn-primary">Create</button>
		</div>
	);
}

export default Input;
