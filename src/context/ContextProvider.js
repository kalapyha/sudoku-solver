import React, { useState, useContext, useCallback } from 'react';
import {
	defaultBaord_9by9,
	emptyBaord_9by9,
	solveSudoku,
} from '../utils/sudoku_solver';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
	const [isLoading, setisLoading] = useState(false);
	const [boardToSolve, setboardToSolve] = useState(defaultBaord_9by9);
	const [resultBoard, setResultBoard] = useState(emptyBaord_9by9);

	const toggleLoading = () => {
		setisLoading((prev) => !prev);
	};

	const memoizedCallback = useCallback(() => {
		return solveSudoku(boardToSolve);
	}, [boardToSolve]);

	//TODO it runs all together. I can't show loading circle
	const solveSudokuBoard = () => {
		console.log('solving sudoku...');

		const { board, time } = memoizedCallback();

		setResultBoard(board);
		console.table(board);
		console.log(`Time spent to solve Sudoku: ${time}ms`);
		setisLoading(false);
	};

	return (
		<AppContext.Provider
			value={{
				isLoading,
				boardToSolve,
				resultBoard,
				toggleLoading,
				solveSudokuBoard,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
