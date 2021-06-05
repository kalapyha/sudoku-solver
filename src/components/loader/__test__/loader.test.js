import { render, screen } from '@testing-library/react';
import Loader from '../Loader';

describe('<Loader />', () => {
	it('renders without crushing', () => {
		const div = document.createElement('div');
		render(<Loader />, div);
		const loader = screen.getByTestId('loader');
		expect(loader).toBeInTheDocument();
	});
});
