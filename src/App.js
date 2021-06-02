import './App.css';
import { useState } from 'react';
import SudokuBoard from './components/SudokuBoard';
import Button from './components/Button';
import Loader from './components/Loader';
import { defaultBaord_9by9, emptyBaord_9by9 } from './utils/sudoku_solver';

function App() {
	const [isLoading, setisLoading] = useState(false);
	return (
		<div className="app-wrapper">
			<SudokuBoard board={defaultBaord_9by9} />
			<Button />
			{isLoading ? <Loader /> : <SudokuBoard board={emptyBaord_9by9} />}
		</div>
	);
}

export default App;
