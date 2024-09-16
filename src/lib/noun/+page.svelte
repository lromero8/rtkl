<script lang="ts">
    import { onDestroy } from 'svelte';
    import { articleStore, isGameOverStore, scoreStore } from '../../stores/store';
    import { NOUNS } from './nouns';
    import type { Noun } from '$lib/noun';


    let item = Math.floor(Math.random() * NOUNS.length);
    let noun: Noun = NOUNS[item];

    let isMatch: boolean;
    let hasAnswered = false;
    let totalNouns = NOUNS.length;
    let unsubscribe: () => void;



    matchArticle();
    selectNewNoun();

    function matchArticle() {
      unsubscribe = articleStore.subscribe(selectedArticle => {
        hasAnswered = selectedArticle !== null && selectedArticle !== undefined;
        isMatch = noun.definiteArticle === selectedArticle;
        if (isMatch) {
          scoreStore.update(n => n + 1);
          totalNouns -=1;
          if (totalNouns === 0) {
              isGameOverStore.set(true);
              totalNouns = NOUNS.length;
              item = Math.floor(Math.random() * NOUNS.length);
          }
          setTimeout(() => selectNewNoun(), 500)
        }
        else {
          if (hasAnswered && !isMatch) {
            scoreStore.update(n => n - 1);
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

<div class="rtkl-score">Score: {$scoreStore}</div>


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

  div.rtkl-score {
    margin: 20px 0;
    text-align: center;
  }

</style>