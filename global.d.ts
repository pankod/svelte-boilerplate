import Svelte from '*.svelte';

declare global {
    interface Window {
        app: Svelte
    }
}

