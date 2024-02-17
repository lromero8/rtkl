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
      },
    //   {
    //     definiteArticle: 'der',
    //     word: 'Hund',
    //     englishTranslation: 'The Dog'
    //   },
    //   {
    //     definiteArticle: 'die',
    //     word: 'Katze',
    //     englishTranslation: 'The Cat'
    //   },
    //   {
    //     definiteArticle: 'das',
    //     word: 'Haus',
    //     englishTranslation: 'The House'
    //   },
    //   {
    //     definiteArticle: 'die',
    //     word: 'Blume',
    //     englishTranslation: 'The Flower'
    //   },
    //   {
    //     definiteArticle: 'der',
    //     word: 'Apfel',
    //     englishTranslation: 'The Apple'
    //   },
    //   {
    //     definiteArticle: 'das',
    //     word: 'Auto',
    //     englishTranslation: 'The Car'
    //   },
    //   {
    //     definiteArticle: 'der',
    //     word: 'Tisch',
    //     englishTranslation: 'The Table'
    //   },
    //   {
    //     definiteArticle: 'die',
    //     word: 'Stadt',
    //     englishTranslation: 'The City'
    //   },
    //   {
    //     definiteArticle: 'die',
    //     word: 'Musik',
    //     englishTranslation: 'The Music'
    //   },
    //   {
    //     definiteArticle: 'das',
    //     word: 'Buch',
    //     englishTranslation: 'The Book'
    //   },
    //   {
    //     definiteArticle: 'der',
    //     word: 'Mond',
    //     englishTranslation: 'The Moon'
    //   },
    //   {
    //     definiteArticle: 'die',
    //     word: 'Nacht',
    //     englishTranslation: 'The Night'
    //   },
    //   {
    //     definiteArticle: 'das',
    //     word: 'Fenster',
    //     englishTranslation: 'The Window'
    //   },
    //   {
    //     definiteArticle: 'der',
    //     word: 'Schlüssel',
    //     englishTranslation: 'The Key'
    //   },
    //   {
    //     definiteArticle: 'die',
    //     word: 'Hand',
    //     englishTranslation: 'The Hand'
    //   },
    //   {
    //     definiteArticle: 'das',
    //     word: 'Telefon',
    //     englishTranslation: 'The Phone'
    //   },
    //   {
    //     definiteArticle: 'die',
    //     word: 'Uhr',
    //     englishTranslation: 'The Clock'
    //   },
    //   {
    //     definiteArticle: 'der',
    //     word: 'Kühlschrank',
    //     englishTranslation: 'The Refrigerator'
    //   },
    //   {
    //     definiteArticle: 'das',
    //     word: 'Geschenk',
    //     englishTranslation: 'The Gift'
    //   },
    //   {
    //     definiteArticle: 'die',
    //     word: 'Tasse',
    //     englishTranslation: 'The Cup'
    //   },
    //   {
    //     definiteArticle: 'der',
    //     word: 'Regen',
    //     englishTranslation: 'The Rain'
    //   },
    //   {
    //     definiteArticle: 'die',
    //     word: 'Straße',
    //     englishTranslation: 'The Street'
    //   },
    //   {
    //     definiteArticle: 'das',
    //     word: 'Geld',
    //     englishTranslation: 'The Money'
    //   },
    //   {
    //     definiteArticle: 'der',
    //     word: 'Spiegel',
    //     englishTranslation: 'The Mirror'
    //   },
    //   {
    //     definiteArticle: 'die',
    //     word: 'Stunde',
    //     englishTranslation: 'The Hour'
    //   },
    //   {
    //     definiteArticle: 'das',
    //     word: 'Feuer',
    //     englishTranslation: 'The Fire'
    //   },
    //   {
    //     definiteArticle: 'der',
    //     word: 'Sessel',
    //     englishTranslation: 'The Armchair'
    //   },
    //   {
    //     definiteArticle: 'die',
    //     word: 'Wolke',
    //     englishTranslation: 'The Cloud'
    //   },
    //   {
    //     definiteArticle: 'das',
    //     word: 'Schiff',
    //     englishTranslation: 'The Ship'
    //   },
    //   {
    //     definiteArticle: 'der',
    //     word: 'Morgen',
    //     englishTranslation: 'The Morning'
    //   },
    //   {
    //     definiteArticle: 'die',
    //     word: 'Brücke',
    //     englishTranslation: 'The Bridge'
    //   },
    //   {
    //     definiteArticle: 'der',
    //     word: 'Himmel',
    //     englishTranslation: 'The Sky'
    //   },
    //   {
    //     definiteArticle: 'die',
    //     word: 'Insel',
    //     englishTranslation: 'The Island'
    //   },
    //   {
    //     definiteArticle: 'das',
    //     word: 'Gesicht',
    //     englishTranslation: 'The Face'
    //   },
    //   {
    //     definiteArticle: 'der',
    //     word: 'Stuhl',
    //     englishTranslation: 'The Chair'
    //   },
    //   {
    //     definiteArticle: 'die',
    //     word: 'Lampe',
    //     englishTranslation: 'The Lamp'
    //   },
    //   {
    //     definiteArticle: 'das',
    //     word: 'Papier',
    //     englishTranslation: 'The Paper'
    //   },
    //   {
    //     definiteArticle: 'der',
    //     word: 'Fluss',
    //     englishTranslation: 'The River'
    //   },
    //   {
    //     definiteArticle: 'die',
    //     word: 'Tür',
    //     englishTranslation: 'The Door'
    //   },
    //   {
    //     definiteArticle: 'das',
    //     word: 'Brot',
    //     englishTranslation: 'The Bread'
    //   },
    //   {
    //     definiteArticle: 'der',
    //     word: 'Stern',
    //     englishTranslation: 'The Star'
    //   },
    //   {
    //     definiteArticle: 'die',
    //     word: 'Küche',
    //     englishTranslation: 'The Kitchen'
    //   },
    //   {
    //     definiteArticle: 'das',
    //     word: 'Ohr',
    //     englishTranslation: 'The Ear'
    //   },
    //   {
    //     definiteArticle: 'der',
    //     word: 'Mittag',
    //     englishTranslation: 'The Noon'
    //   },
    //   {
    //     definiteArticle: 'die',
    //     word: 'Nase',
    //     englishTranslation: 'The Nose'
    //   },
    //   {
    //     definiteArticle: 'der',
    //     word: 'Tiger',
    //     englishTranslation: 'The Tiger'
    //   }
];
