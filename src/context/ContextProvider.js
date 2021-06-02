import React, { useState, useContext } from 'react';
import {
	defaultBaord_9by9,
	emptyBaord_9by9,
	solveSudoku,
} from '../utils/sudoku_solver';

const LoadingContext = React.createContext();
const BoardToSolveContext = React.createContext();
const ResultBoardContext = React.createContext();
const SudokuSolveContext = React.createContext();

export function useLoading() {
	return useContext(LoadingContext);
}

export function useBoardToSolve() {
	return useContext(BoardToSolveContext);
}

export function useResultBoard() {
	return useContext(ResultBoardContext);
}

export function useSolveBoard() {
	return useContext(SudokuSolveContext);
}

export function ContextProvider({ children }) {
	const [isLoading, setisLoading] = useState(false);
	const [boardToSolve, setboardToSolve] = useState(defaultBaord_9by9);
	const [resultBoard, setResultBoard] = useState(emptyBaord_9by9);

	function handleSolve() {
		setisLoading(true);
		const { board, time } = solveSudoku(boardToSolve);
		setResultBoard(board);

		setisLoading(false);
		console.log(`Time spent to solve Sudoku: ${time}ms`);
	}
	return (
		<LoadingContext.Provider value={isLoading}>
			<BoardToSolveContext.Provider value={boardToSolve}>
				<ResultBoardContext.Provider value={resultBoard}>
					<SudokuSolveContext.Provider value={handleSolve}>
						{children}
					</SudokuSolveContext.Provider>
				</ResultBoardContext.Provider>
			</BoardToSolveContext.Provider>
		</LoadingContext.Provider>
	);
}
