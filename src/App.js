import SudokuBoard from './components/SudokuBoard';
import Button from './components/Button';
import { defaultBaord_9by9, emptyBaord_9by9 } from './utils/sudoku_solver';

function App() {
	return (
		<div className="app-wrapper">
			<SudokuBoard board={defaultBaord_9by9} />
			<Button />
			<SudokuBoard board={emptyBaord_9by9} />
		</div>
	);
}

export default App;
