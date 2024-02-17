import { writable } from 'svelte/store';

export const articleStore = writable(null);

export const authStore = writable({
    loading: true,
    data: {}
})
