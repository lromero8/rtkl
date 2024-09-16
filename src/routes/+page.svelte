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


  function setScoresStore() {
      if (data.scores) {
          console.log(data);
          savedScores = data.scores;
          savedScoresStore.set(data.scores);
      }
  }

  function saveScore() {
    try {
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
    catch (error) {
      console.error(error);
    }

      
  }

  async function saveDoc() {
      try {
        if (newScore) {
          await addDoc(collection(db, 'scores'), { score: newScore });
        }
      } catch (err) {
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

  <div class="modal-overlay">
    <div class="modal">
      <!-- Your modal content goes here -->
      <div class="modal-header">
        <h2>Game Over</h2>
      </div>
      <div class="modal-body">
        <!-- Add your modal content here -->
        <p>Your game is over!</p>
        <p>Score: {$scoreStore} points</p>

        <div>
          <input type="text" placeholder="rtklEater123" bind:value={nickName}>
          <button on:click={saveScore}>Save</button>
        </div>

      </div>
      <div class="modal-footer">
        <button on:click={reset}>Close</button>
      </div>
    </div>
  </div>
{/if}

<style>
  /* div.rtkl-language-dropdown {} */

  .modal-overlay {
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

  .modal {
    background: #fff;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    width: 500px;
    height: 300px;
  }

  .modal-header {
    text-align: center;
    margin-bottom: 10px;
  }

  .modal-body {
    text-align: center;
    margin-bottom: 20px;
  }

  .modal-footer {
    text-align: center;
  }
</style>