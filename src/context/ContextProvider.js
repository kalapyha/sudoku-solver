import React, { useContext, useReducer, useEffect, useRef } from 'react';
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
		isSolving: false,
		boardToSolve: defaultBaord_9by9,
		resultBoard: emptyBaord_9by9,
		showAlert: false,
		alertSetting: {
			type: 'hidden',
			message: '',
		},
	};

	const initialRender = useRef(true);

	const [state, dispatch] = useReducer(reducer, initialState);

	const startLoading = () => {
		dispatch({ type: 'ON_LOADING' });
		dispatch({ type: 'TOGGLE_BTN_DISABLED' });
	};

	const updateBoard = (newBoard) => {
		dispatch({ type: 'UPDATE_BOARD_TO_SOLVE', payload: newBoard });
	};

	const clearBoard = () => {
		dispatch({ type: 'CLEAR_RESULTS_BOARD', payload: emptyBaord_9by9 });
	};

	const startSolving = () => {
		dispatch({ type: 'TOGGLE_SOLVING' });
	};

	const showErrorMessage = () => {
		dispatch({
			type: 'DANGER_ALERT',
			payload: {
				type: 'danger',
				message: 'Yor Board is invalid! Check it for number duplicates.',
			},
		});
	};

	useEffect(() => {
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

	useEffect(() => {
		if (initialRender.current) {
			initialRender.current = false;
		} else {
			const { board, time } = solveSudoku(state.boardToSolve);
			dispatch({ type: 'SOLVE_SUDOKU', payload: board });
			console.log(`Time spent to solve Sudoku: ${time} ms`);
			dispatch({ type: 'OFF_LOADING' });
			dispatch({ type: 'BUTTON_ENABLED' });
			dispatch({
				type: 'SUCCESS_ALERT',
				payload: {
					type: 'success',
					message: `Your Sudoku has been solved! Time spent - ${time} ms`,
				},
			});
		}
	}, [state.isSolving]);

	return (
		<AppContext.Provider
			value={{
				...state,
				updateBoard,
				clearBoard,
				startLoading,
				showErrorMessage,
				startSolving,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
