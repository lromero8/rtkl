<script lang="ts">
    
    type Article = 'die' | 'der' | 'das';

    interface Noun {
        definiteArticle: Article;
        word: string;
        englishTranslation: string;
    }

    let nouns: Noun[] = [
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
        isMatch = false;
    }
</script>

<div class="container">
    <div class="noun-container">
        <strong class:correct={hasAnswered && isMatch} class:incorrect={hasAnswered && !isMatch}>
          {noun.word}
        </strong>
        <div>
          <small>{noun.englishTranslation}</small>
        </div>
    </div>

    <div class="articles">
        <button on:click={() => matchArticle('die')}>die</button>
        <button on:click={() => matchArticle('der')}>der</button>
        <button on:click={() => matchArticle('das')}>das</button>
    </div>
  
  
    {#if hasAnswered}
      <!-- <div class="result">
        <strong class:correct={isMatch} class:incorrect={!isMatch}>
          {isMatch ? 'Correct!' : 'Incorrect!'}
        </strong>
      </div> -->
  
      {/if}
      <!-- {#if isMatch} -->
        <div class="next">
          <button class="next" disabled="{!isMatch}" on:click={selectNewNoun}>Next</button>
        </div>
      <!-- {/if} -->
</div>


<style lang="scss">

    div.container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
        margin: 0;
        font-family: 'Arial', sans-serif;
        background-color: #f5f5f5;
        text-align: center;
    }

    div.noun-container {
      padding: 2.9em 2.9em;
      background-color: #fff;
      border: 1px solid #fff;
      border-radius: 14px;
      margin-bottom: 1rem;
      font-size: 1.5rem;
      color: #000;
      
      small {
        font-size: 0.5rem;
      }


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
      background-color: #2196f3;
      color: #fff;
    }
  
    button:active {
      // transform: translateY(1px);
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
      width: 215px;
    }

    button.next:disabled {
      opacity: 0.45;
    }
  
    button.next:hover {
      background-color: #0d47a1;
    }
</style>
  