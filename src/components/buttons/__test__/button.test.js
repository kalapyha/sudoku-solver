import React from 'react';
import { AppProvider } from '../../../context/ContextProvider';
import { render, screen, fireEvent } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import Button from '../Button';

beforeEach(() => {
	const div = document.createElement('div');
	render(
		<AppProvider>
			<Button />
		</AppProvider>,
		div
	);
});

describe('<Button />', () => {
	it('renders without crushing', () => {
		const button = screen.getByTestId('button');
		expect(button).toBeInTheDocument();
	});

	it('renders correctly', () => {
		const button = screen.getByTestId('button');
		expect(button).toHaveTextContent('Solve!');
	});

	it('clicks correctly', () => {
		global.console.log = jest.fn();
		const button = screen.getByTestId('button');
		fireEvent.click(button);
		expect(console.log).toBeCalledTimes(1);
	});

	it('matches snapshot', () => {
		const tree = TestRenderer.create(
			<AppProvider>
				<Button />
			</AppProvider>
		).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
