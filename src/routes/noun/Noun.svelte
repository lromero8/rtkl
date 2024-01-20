<script lang="ts">
    import { NOUNS, type Noun } from "./noun";
    import { articleStore } from '../../stores/store';

    let item = Math.floor(Math.random() * NOUNS.length);
    let noun: Noun = NOUNS[item];

    let isMatch: boolean;
    let hasAnswered = false;

    matchArticle();
    selectNewNoun();

    function matchArticle() {
        articleStore.subscribe(selectedArticle => {
            hasAnswered = selectedArticle !== '';
            isMatch = noun.definiteArticle === selectedArticle;
            if (isMatch) {
                setTimeout(() => selectNewNoun(), 500)
            }
        });
    }

    function selectNewNoun() {
        item = (item + 1) % NOUNS.length;
        noun = NOUNS[item];
        hasAnswered = false;
        isMatch = false;
    }

</script>

<div class="rtkl-noun-container">
    <strong class:correct={hasAnswered && isMatch} class:incorrect={hasAnswered && !isMatch}>
      {noun.word}
    </strong>
    <div>
      <small>{noun.englishTranslation}</small>
    </div>
</div>

<style>

    .rtkl-noun-container {
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

    strong.correct {
      color: #4caf50;
    }
  
    strong.incorrect {
      color: #f44336;
    }
</style>