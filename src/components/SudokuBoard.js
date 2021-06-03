import React from 'react';
import SudokuCell from './SudokuCell';

function SudokuBoard({ board }) {
	return (
		<ul>
			{board.map((row) => {
				return row.map((cell) => {
					return (
						<SudokuCell
							value={cell}
							key={`${Math.floor(Math.random() * 1e10)}`}
						/>
					);
				});
			})}
		</ul>
	);
}

export default React.memo(SudokuBoard);
