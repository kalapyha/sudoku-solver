import './App.css';
import React from 'react';
import Input from './components/input/Input';
import SudokuBoard from './components/board/SudokuBoard';
import Button from './components/buttons/Button';
import Loader from './components/loader/Loader';
import Alert from './components/alert/Alert';
import { useGlobalContext } from './context/ContextProvider';

function App() {
	const { isLoading, boardToSolve, resultBoard, alertSetting } =
		useGlobalContext();
	return (
		<>
			<Input />
			<Alert {...alertSetting} />
			<div className="app-wrapper">
				<SudokuBoard board={boardToSolve} />
				<Button />
				{isLoading ? <Loader /> : <SudokuBoard board={resultBoard} />}
			</div>
		</>
	);
}

export default App;
