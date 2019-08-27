import Layout from './index.svelte';
import { render } from '@testing-library/svelte'

describe('Layout', () => {
    it('default render', () => {
        const { container } = render(Layout)

        expect(container.getElementsByClassName('layout').length).toBe(1)
        expect(container).toMatchSnapshot()
    });
});
