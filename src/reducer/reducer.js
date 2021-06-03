const reducer = (state, action) => {
	switch (action.type) {
		case 'OFF_LOADING':
			return { ...state, isLoading: false };
		case 'ON_LOADING':
			return { ...state, isLoading: true };
		case 'TOGGLE_LOADING':
			return { ...state, isLoading: !state.isLoading };
		case 'TOGGLE_BTN_DISABLED':
			return { ...state, isBtnDisabled: !state.isBtnDisabled };
		case 'SOLVE_SUDOKU':
			return { ...state, resultBoard: action.payload };
		case 'UPDATE_BOARD_TO_SOLVE':
			return { ...state, boardToSolve: action.payload };
		case 'CLEAR_RESULTS_BOARD':
			return { ...state, resultBoard: action.payload };
		case 'SUCCESS_ALERT':
			return { ...state, alertSetting: action.payload, showAlert: true };
		case 'DANGER_ALERT':
			return { ...state, alertSetting: action.payload, showAlert: true };
		case 'HIDE_ALERT':
			return { ...state, alertSetting: action.payload, showAlert: false };
		default:
			throw new Error('Incorrect action type!');
	}
};

export default reducer;
