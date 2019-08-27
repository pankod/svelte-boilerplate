import HelloWorld from './index.svelte';
import { render } from '@testing-library/svelte'

describe('Hello World', () => {
    it('renders Hello World! text', () => {
        const { container, getAllByText } = render(HelloWorld)

        expect(getAllByText('Hello').length).toBe(1)
        expect(getAllByText('World').length).toBe(2)

        expect(container.getElementsByClassName('title').length).toBe(1)
        expect(container.getElementsByClassName('title__top').length).toBe(1)
        expect(container.getElementsByClassName('title__front').length).toBe(1)
        expect(container.getElementsByClassName('title__back').length).toBe(1)

        expect(container).toMatchSnapshot()
    });
});
