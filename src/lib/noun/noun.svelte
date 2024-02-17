<script lang="ts">
    import { onDestroy } from 'svelte';
    import { NOUNS, type Noun } from "./noun";
    import { articleStore } from '../../stores/store';


    let item = Math.floor(Math.random() * NOUNS.length);
    let noun: Noun = NOUNS[item];

    let isMatch: boolean;
    let hasAnswered = false;
    let totalArticles = NOUNS.length;
    let allArticlesCompleted = false;
    let unsubscribe: () => void;
    
    export let isGameOver = false;
    export let score = 0;



    matchArticle();
    selectNewNoun();

    function matchArticle() {
      unsubscribe = articleStore.subscribe(selectedArticle => {
        hasAnswered = selectedArticle !== null;
        isMatch = noun.definiteArticle === selectedArticle;
        if (isMatch) {
          score++;
          totalArticles -=1;
          if (totalArticles === 0) {
              allArticlesCompleted = true;
              isGameOver = true;
              // Logic or notification when all articles are completed
              // Reset totalArticles
              // Reset score
          }
          setTimeout(() => selectNewNoun(), 500)
        }
        else {
          if (hasAnswered && !isMatch) {
            score--;
          }
          setTimeout(() => {
            hasAnswered = false;
          }, 500)
        }
      });
    }

    function selectNewNoun() {
        item = (item + 1) % NOUNS.length;
        noun = NOUNS[item];
        isMatch = false;
        articleStore.set(null);
    }

    function dispatchModalEvent() {

    }

    onDestroy(() => {
      unsubscribe();
    });


</script>

<div class="rtkl-noun-container" class:correct={hasAnswered && isMatch} class:incorrect={hasAnswered && !isMatch}>
    <strong class:correct={hasAnswered && isMatch} class:incorrect={hasAnswered && !isMatch}>
      {noun.word}
    </strong>
    <div>
      <small>{noun.englishTranslation}</small>
    </div>
</div>

<span>Articles completed: {allArticlesCompleted}</span>
<div>Score: {score}</div>


<style>


  div.rtkl-noun-container.correct { background-color: #4caf50; }
  div.rtkl-noun-container.incorrect { background-color: #f44336; }

  div.rtkl-noun-container {
    text-align: center;
    padding: 2.9em 2.9em;
    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 14px;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: #000;
  }

  small {
    font-size: 0.5rem;
  }

  strong.correct, strong.incorrect {
    color: white;
  }

</style>