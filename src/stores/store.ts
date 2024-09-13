import type { Article } from '$lib/noun/noun';
import type { Score } from '$lib/score';
import { writable } from 'svelte/store';

export const articleStore = writable<Article|null>();
export const scoresStore = writable<Score[]>();
