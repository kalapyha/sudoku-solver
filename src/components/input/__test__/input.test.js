import React from 'react';
import { AppProvider } from '../../../context/ContextProvider';
import { render, fireEvent } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import Input from '../Input';

const setup = () => {
	const utils = render(
		<AppProvider>
			<Input />
		</AppProvider>
	);
	const input = utils.getByTestId('input');
	const inputBtn = utils.getByTestId('input-btn');
	return {
		input,
		inputBtn,
		...utils,
	};
};

describe('<Input />', () => {
	it('it should ignore everything except 1-9 and .', () => {
		const { input } = setup();
		fireEvent.change(input, { target: { value: '0 test @#$%^&*() 42 ..' } });
		expect(input.value).toBe('42..');
	});

	it('submit button should be disabled', () => {
		const { inputBtn } = setup();
		expect(inputBtn).toBeDisabled();
	});

	it('matches snapshot', () => {
		const tree = TestRenderer.create(
			<AppProvider>
				<Input />
			</AppProvider>
		).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
