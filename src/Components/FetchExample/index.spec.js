import FetchExample from './index.svelte';
import unmock from "unmock-node";

describe('Sample', () => {
	beforeAll(() => { unmock.on() });
    afterAll(() => { unmock.off() });
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