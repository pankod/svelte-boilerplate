import FetchExample from './index.svelte';

describe('Sample', () => {
	it('is empty by default', (next) => {
		const target = document.createElement('div');
		const sample = new FetchExample({ target });
        setTimeout(() => {
			const { firstElementChild: element } = target;
			expect(element.children.length).toBe(2);

            next();
		}, 10);
	});
});