<script lang="ts">

  import '../styles/global.scss'
  import { addDoc, collection } from "firebase/firestore";
  import { db } from "$lib/firebase/firebase";
  import { onMount } from "svelte";
  import type { Score } from "$lib/score";
  import { isGameOverStore, savedScoresStore, scoreStore } from "../stores/store";
  import Home from '$lib/home/+page.svelte';

  export let data;

  let newScore: Score = {
    user: '',
    language: 'german',
    score: 0
  };
  let savedScores: Score[];
  let nickName: '';
  let showError = false;
  let errorMsg: unknown;


  function setScoresStore() {
      if (data.scores) {
          console.log(data);
          savedScores = data.scores;
          savedScoresStore.set(data.scores);
      }
  }

  function saveScore() {
    try {
      showError = false;
      newScore.user = nickName;
      newScore.score = $scoreStore;
      newScore.language = 'german';

      // Check if nickname already exists in the store (instead of fetching again)
      if (savedScores.some(sd => sd.user === newScore.user)) {
        throw Error('Nickname already exists!');
      }

      // Save the score to Firestore
      saveDoc()

      // Directly update the store with the new score (no need to fetch from Firestore again)
      savedScoresStore.update(scores => [...scores, newScore]);

      savedScores = [...savedScores, newScore];
      console.log(savedScores);

      console.log(`${nickName}'s' scored of ${$scoreStore} successfully saved!`);
    }
    catch (err) {
      showError = true;
      errorMsg = err;
      console.error(err);
    }

      
  }

  async function saveDoc() {
      try {
        showError = false;
        if (newScore) {
          await addDoc(collection(db, 'scores'), { score: newScore });
        }
      } catch (err) {
          showError = true;
          errorMsg = err;
          console.error("There was an error saving your information ", err);
      }
  }

  function reset() {
    isGameOverStore.set(false);
    scoreStore.set(0);
  }

  onMount(setScoresStore);

</script>

<!-- <div class="rtkl-language-dropdown">
  <select name="" id="">
      <option value="french">French</option>
      <option value="spanish">Spanish</option>
      <option value="german">German</option>
  </select>
</div> -->

<Home />
  
{#if $isGameOverStore}

  <div class="rtkl-modal-overlay">
    <div class="rtkl-modal">
      <div class="rtkl-modal-header">
        <h2>Game Over</h2>
      </div>
      <div class="rtkl-modal-body">
        <p class="rtkl-score">Score: {$scoreStore} points</p>

        <div>
          <input type="text" placeholder="rtklEater123" bind:value={nickName}>
        </div>

        {#if showError}
          <p class="rtkl-error-msg">{errorMsg}</p>
        {/if}

      </div>
      <div class="rtkl-modal-footer">
        <button class="rtkl-close" on:click={reset}>Close</button>
        <button class="rtkl-save" on:click={saveScore}>Save</button>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  /* div.rtkl-language-dropdown {} */

  $bg-color-save: #4caf50;
  $bg-color-close: #f44336;

  .rtkl-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  .rtkl-modal {
    background: #fff;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    width: 500px;
    height: 300px;
  }

  .rtkl-modal-header {
    text-align: center;
    margin-bottom: 10px;
  }

  .rtkl-modal-body {
    text-align: center;
    margin-bottom: 20px;

    input {
      padding: 0.5rem 1rem;
      border: 1px solid #ccc;
      border-radius: 14px;
    }

    .rtkl-error-msg {
      color: $bg-color-close;
    }
  }

  .rtkl-score {
    margin: 20px 0;
  }

  .rtkl-modal-footer {
    text-align: center;

    button {
        font-size: 1rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
        border: 1px solid #ccc;
        background-color: #fff;
        color: #333;
        border-radius: 14px;
        transition: background-color 0.3s, color 0.3s;
    }

    button.rtkl-save:hover {
        background-color: $bg-color-save;
        color: #fff;
    }

    button.rtkl-close:hover {
        background-color: $bg-color-close;
        color: #fff;
    }
  }
</style>