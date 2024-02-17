<script lang="ts">

  import Home from "$lib/home.svelte";
  import '../styles/global.scss'
  import { addDoc, collection, getDocs } from "firebase/firestore";
  import { db } from "$lib/firebase/firebase";
  import { onMount } from "svelte";


  type Language = 'german';

  interface Score {
    user: string;
    language: Language;
    score: number;
  }

  let newScore: Score = {
    user: '',
    language: 'german',
    score: 0
  };
  let savedScores: Score[];
  let isGameOver = false;
  let nickName: '';
  let score = 0;


  function saveScore() {
    try {
      newScore.user = nickName;
      newScore.score = score;
      newScore.language = 'german';

      if (savedScores.some(sd => sd.user === newScore.user)) {
        throw Error('Nickname already exists!');
      }

      saveDoc()
      console.log(`${nickName}'s' scored of ${score} successfully saved!`);
    }
    catch (error) {
      console.error(error);
    }

      
  }

  async function fetchScores() {
    try {
      const querySnapshot = await getDocs(collection(db, 'scores'));
      const docs = querySnapshot.docs.map<Score>(doc => doc.data().score as Score);
      savedScores = docs;
    }
    catch (error) {
      console.error('There was an error fetching the data');  
    }
  }

  async function saveDoc() {
      try {
        if (newScore) {
          await addDoc(collection(db, 'scores'), { score: newScore });
          await fetchScores();
        }
      } catch (err) {
          console.error("There was an error saving your information");
      }
  }

  onMount(fetchScores);

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