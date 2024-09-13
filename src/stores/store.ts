import type { Article } from '$lib/noun/noun';
import { writable } from 'svelte/store';

export const articleStore = writable<Article|null>();
