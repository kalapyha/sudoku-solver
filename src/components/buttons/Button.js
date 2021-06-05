import React from 'react';
import { useGlobalContext } from '../../context/ContextProvider';

function Button() {
	const { isBtnDisabled, startLoading, startSolving } = useGlobalContext();

	const handleClick = () => {
		startLoading();
		startSolving();
	};

	return (
		<button
			data-testid="button"
			className="btn btn-primary"
			onClick={handleClick}
			disabled={isBtnDisabled}
		>
			Solve!
		</button>
	);
}

export default Button;
