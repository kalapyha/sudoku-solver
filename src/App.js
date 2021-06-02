import './App.css';
import Input from './components/Input';
import SudokuBoard from './components/SudokuBoard';
import Button from './components/Button';
import Loader from './components/Loader';
import {
	useLoading,
	useBoardToSolve,
	useResultBoard,
} from './context/ContextProvider';

function App() {
	const isLoading = useLoading();
	const boardToSolve = useBoardToSolve();
	// const memoizedBoard = useMemo(boardToSolve);
	const resultBoard = useResultBoard();
	return (
		<>
			<Input />
			<div className="app-wrapper">
				<SudokuBoard board={boardToSolve} />
				<Button />
				{isLoading ? <Loader /> : <SudokuBoard board={resultBoard} />}
			</div>
		</>
	);
}

export default App;
