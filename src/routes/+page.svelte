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

<main>
    <div class="noun">
        <strong class:correct={hasAnswered && isMatch} class:incorrect={hasAnswered && !isMatch}>
          {noun.word}
        </strong>
    </div>

    <div>
        <button on:click={() => matchArticle('die')}>die</button>
        <button on:click={() => matchArticle('der')}>der</button>
        <button on:click={() => matchArticle('das')}>das</button>
    </div>
  
  
    {#if hasAnswered}
      <strong class:correct={isMatch} class:incorrect={!isMatch}>
        {isMatch ? 'Correct!' : 'Incorrect!'}
      </strong>
  
      {#if isMatch}
        <button class="next" on:click={selectNewNoun}>Next</button>
      {/if}
    {/if}
</main>


<style lang="scss">

    main {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        margin: 0;
        font-family: 'Arial', sans-serif;
        background-color: #f5f5f5;
        text-align: center;
    }

    div {
        display: block;
        // margin-bottom: ;
    }
  
    strong {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #333;
    }
  
    button {
      font-size: 1rem;
      padding: 0.5rem 1rem;
      margin: 0.5rem;
      cursor: pointer;
      border: 1px solid #ccc;
      background-color: #fff;
      color: #333;
      border-radius: 4px;
      transition: background-color 0.3s, color 0.3s;
    }
  
    button:hover {
      background-color: #333;
      color: #fff;
    }
  
    button:active {
      transform: translateY(1px);
    }
  
    strong.correct {
      color: #4caf50;
    }
  
    strong.incorrect {
      color: #f44336;
    }
  
    button.next {
      background-color: #2196f3;
      color: #fff;
    }
  
    button.next:hover {
      background-color: #0d47a1;
    }
</style>
  