---
id: unit-test
title: Unit Testing
sidebar_label: Unit Testing
---

This boilerplate uses [Jest](https://jestjs.io/docs/en/getting-started) and [Svelte Testing Library](https://testing-library.com/docs/svelte-testing-library/intro) for unit testing.

Example testing functions from svelte-boilerplate.

## Testing Components
```js
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
```


## Testing Services

```javascript

describe('Http request tests', () => {
    test('200 test', async () => {
        const result = await Http.Request('GET', '/200');
        expect(result.success).toEqual(true);
    });

    test('404 test', async () => {
        try {
            await Http.Request('GET', '/404');
        } catch (error) {
            expect(error.status).toEqual(404);
        }
    });

    test('Catch test', async () => {
        try {
            await Http.Request('GET', '');
        } catch (error) {
            expect(error.code).toBeUndefined();
        }
    });
});

```

