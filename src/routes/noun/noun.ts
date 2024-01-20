export type Article = 'die' | 'der' | 'das';

export interface Noun {
    definiteArticle: Article;
    word: string;
    englishTranslation: string;
}

export const NOUNS: Noun[] = [
    {
        definiteArticle: 'das',
        word: 'Wetter',
        englishTranslation: 'The Weather'
    },
    {
        definiteArticle: 'die',
        word: 'Brille',
        englishTranslation: 'The Glasses'
    },
    {
        definiteArticle: 'der',
        word: 'Kaffee',
        englishTranslation: 'The Coffee'
    }
];
