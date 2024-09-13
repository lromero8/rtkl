import type { Article } from '$lib/article';
import type { Score } from '$lib/score';
import { writable } from 'svelte/store';

export const articleStore = writable<Article|null>();
export const savedScoresStore = writable<Score[]>();
export const isGameOverStore = writable<boolean>(false);
export const scoreStore = writable<number>(0);
