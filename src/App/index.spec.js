import App from './index.svelte'
import { render } from '@testing-library/svelte'

describe('App', () => {
    it('should render the app', () => {
        const { container, getAllByText } = render(App)

        expect(container.getElementsByClassName('layout').length).toBe(1)
        expect(container.getElementsByClassName('image-content').length).toBe(1)
        expect(container.getElementsByClassName('bg-image').length).toBe(1)
        expect(container.getElementsByClassName('title').length).toBe(1)
        expect(container.getElementsByClassName('title__back').length).toBe(1)
        expect(container.getElementsByClassName('title__front').length).toBe(1)

        expect(getAllByText('Hello World!').length).toBe(2)

        expect(container).toMatchSnapshot()
    })
})
