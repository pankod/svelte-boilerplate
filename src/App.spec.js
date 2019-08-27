import App from './App.svelte'
import { render } from '@testing-library/svelte'

describe('App', () => {
    it('should render the app', (next) => {
        const { container, getByText, getAllByText } = render(App)

        setTimeout(() => {
            expect(container.getElementsByClassName('layout').length).toBe(1)
            expect(container.getElementsByClassName('image-content').length).toBe(1)
            expect(container.getElementsByClassName('bg-image').length).toBe(1)
            expect(container.getElementsByClassName('title').length).toBe(1)
            expect(container.getElementsByClassName('title__back').length).toBe(1)
            expect(container.getElementsByClassName('title__front').length).toBe(1)
            
            expect(getAllByText('Hello World!').length).toBe(2)
            expect(getByText('test'))
            expect(getByText('test2'))

            expect(container).toMatchSnapshot()

            next()
        }, 10)
    })
})
