import React from 'react';

function Alert({ type, message }) {
	return (
		<div className={`alert ${type}`} data-testid="alert">
			{message}
		</div>
	);
}

export default Alert;
