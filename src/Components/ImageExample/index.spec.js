import ImageExample from './index.svelte';

describe('Image Sample', () => {
	it('is empty by default', (next) => {
		const target = document.createElement('div');
		new ImageExample({ target });
		setTimeout(() => {
			const { firstElementChild: element } = target;
			expect(element.className).toBe('image-content');
			next();
		}, 10);
	});
});