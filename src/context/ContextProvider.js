import React, { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducer/reducer';
import {
	defaultBaord_9by9,
	emptyBaord_9by9,
	solveSudoku,
} from '../utils/sudoku_solver';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
	const initialState = {
		isBtnDisabled: false,
		isLoading: false,
		boardToSolve: defaultBaord_9by9,
		resultBoard: emptyBaord_9by9,
		showAlert: false,
		alertSetting: {
			type: 'hidden',
			message: '',
		},
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	// TODO figure out why it is not working. async doesnt work too
	const solveSudokuBoard = async () => {
		dispatch({ type: 'ON_LOADING' });
		dispatch({ type: 'TOGGLE_BTN_DISABLED' });
		const { board, time } = await solveSudoku(state.boardToSolve);
		dispatch({ type: 'SOLVE_SUDOKU', payload: board });
		console.log(`Time spent to solve Sudoku: ${time} ms`);
		dispatch({ type: 'OFF_LOADING' });
		dispatch({ type: 'TOGGLE_BTN_DISABLED' });
	};

	const startLoading = () => {
		dispatch({ type: 'ON_LOADING' });
		dispatch({ type: 'TOGGLE_BTN_DISABLED' });
	};

	const stopLoading = () => {
		dispatch({ type: 'OFF_LOADING' });
		dispatch({ type: 'TOGGLE_BTN_DISABLED' });
	};

	const updateBoard = (newBoard) => {
		dispatch({ type: 'UPDATE_BOARD_TO_SOLVE', payload: newBoard });
	};

	const clearBoard = () => {
		dispatch({ type: 'CLEAR_RESULTS_BOARD', payload: emptyBaord_9by9 });
	};

	const showSuccessMessage = () => {
		dispatch({
			type: 'SUCCESS_ALERT',
			payload: { type: 'success', message: 'Your Sudoku has been solved!' },
		});
	};

	useEffect(() => {
		console.log('EFFECT');
		const timeout = setTimeout(() => {
			dispatch({
				type: 'HIDE_ALERT',
				payload: { type: 'hidden', message: '' },
			});
			return () => {
				clearTimeout(timeout);
			};
		}, 2500);
	}, [state.showAlert]);

	return (
		<AppContext.Provider
			value={{
				...state,
				solveSudokuBoard,
				updateBoard,
				clearBoard,
				showSuccessMessage,
				startLoading,
				stopLoading,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
