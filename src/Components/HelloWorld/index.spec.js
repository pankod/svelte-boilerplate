import HelloWorld from './index.svelte';

describe('Sample', () => {
	it('is empty by default', (next) => {
		const target = document.createElement('div');
		const sample = new HelloWorld({ target });
        console.log(sample);

        setTimeout(() => {
			const { firstElementChild: element } = target;

            expect(element.textContent).toBe('Hello World! Hello World!');

            next();
		}, 10);
	});
});