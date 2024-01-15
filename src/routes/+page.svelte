<script lang="ts">
    
    type Article = 'die' | 'der' | 'das';

    interface Noun {
        definiteArticle: Article;
        word: string;
    }

    let nouns: Noun[] = [
        {
            definiteArticle: 'das',
            word: 'Wetter'
        },
        {
            definiteArticle: 'die',
            word: 'Brille'
        },
        {
            definiteArticle: 'der',
            word: 'Kaffee'
        }
    ];

    let item = Math.floor(Math.random() * nouns.length);
    let noun: Noun = nouns[item];
    let isMatch: boolean;
    let hasAnswered = false;

    selectNewNoun();

    function matchArticle(article: Article) {
        hasAnswered = true;
        isMatch = article === noun.definiteArticle;
    }

    function selectNewNoun() {
        item = (item + 1) % nouns.length;
        noun = nouns[item];
        hasAnswered = false;
    }
</script>

<strong>{noun.word}</strong>

<button on:click={ () => matchArticle('die')}>die</button>
<button on:click={ () => matchArticle('der')}>der</button>
<button on:click={ () => matchArticle('das')}>das</button>

{#if hasAnswered}
    <strong>{isMatch ? 'Correct!' : 'Incorrect!'}</strong>
    
    {#if isMatch}
        <button on:click={selectNewNoun}>Next</button>
    {/if}

{/if}