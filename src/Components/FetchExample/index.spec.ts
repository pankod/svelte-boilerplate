import FetchExample from './index.svelte';
import { render } from '@testing-library/svelte'

describe('Fetch Example', () => {
    it('fetches links asynchronously', (next) => {
        const { container } = render(FetchExample)

        setTimeout(() => {
            expect(container.getElementsByTagName('li').length).toBe(2)
            expect(container).toMatchSnapshot()
            next()
        }, 10)
    });
});
