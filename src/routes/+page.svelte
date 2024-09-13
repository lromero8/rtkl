<script lang="ts">

  import Home from "$lib/home.svelte";
  import '../styles/global.scss'
  import { addDoc, collection } from "firebase/firestore";
  import { db } from "$lib/firebase/firebase";
  import { onMount } from "svelte";
  import type { Score } from "$lib/score";
  import { scoresStore } from "../stores/store";

  export let data;

  let newScore: Score = {
    user: '',
    language: 'german',
    score: 0
  };
  let savedScores: Score[];
  let isGameOver = false;
  let nickName: '';
  let score = 0;


  function setScoresStore() {
      if (data.scores) {
          console.log(data);
          savedScores = data.scores;
          scoresStore.set(data.scores);
      }
  }


  function saveScore() {
    try {
      newScore.user = nickName;
      newScore.score = score;
      newScore.language = 'german';

      // Check if nickname already exists in the store (instead of fetching again)
      if (savedScores.some(sd => sd.user === newScore.user)) {
        throw Error('Nickname already exists!');
      }

      // Save the score to Firestore
      saveDoc()

      // Directly update the store with the new score (no need to fetch from Firestore again)
      scoresStore.update(scores => [...scores, newScore]);

      savedScores = [...savedScores, newScore];
      console.log(savedScores);

      console.log(`${nickName}'s' scored of ${score} successfully saved!`);
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

  onMount(setScoresStore);

</script>

<div class="rtkl-language-dropdown">
  <select name="" id="">
      <option value="french">French</option>
      <option value="spanish">Spanish</option>
      <option value="german">German</option>
  </select>
</div>

<Home bind:isGameOver={isGameOver} bind:score={score}/>
  
{#if isGameOver}
  <input type="text" placeholder="rtklEater123" bind:value={nickName}>
  <button on:click={saveScore}>Save</button>
{/if}

<style>
  div.rtkl-language-dropdown {}
</style>