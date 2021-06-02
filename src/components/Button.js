import React from 'react';
import { useSolveBoard } from '../context/ContextProvider';

function Button() {
	const handleClick = useSolveBoard();
	return (
		<button className="btn btn-success" onClick={handleClick}>
			Solve!
		</button>
	);
}

export default Button;
