import Layout from './index.svelte';

describe('Layout', () => {
	it('default render', (next) => {
		const target = document.createElement('div');
		const sample = new Layout({ target });

        setTimeout(() => {
			const { firstElementChild: element } = target;
			
            expect(element.getAttribute('class')).toBe('layout');

            next();
		}, 10);
	});
});