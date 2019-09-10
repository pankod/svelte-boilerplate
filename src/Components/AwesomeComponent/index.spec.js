import awesomeComponent from './index.svelte';
import { render } from '@testing-library/svelte'

describe('Sample', () => {
	it('renders without failing', () => {
		const { container, getAllByText } = render(awesomeComponent)

		expect(getAllByText('Hello World!').length).toBe(1)
		expect(container).toMatchSnapshot()
	});
});