<script lang="ts">

  import '../styles/global.scss'
  import { onMount } from "svelte";
  import type { Score } from "$lib/score";
  import { savedScoresStore } from "../stores/store";
  import Home from '$lib/home/+page.svelte';
  import SaveScoreModal from '$lib/save-modal/+page.svelte'

  export let data;

  let savedScores: Score[];


  function setScoresStore() {
      if (data.scores) {
          console.log(data);
          savedScores = data.scores;
          savedScoresStore.set(data.scores);
      }
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
<SaveScoreModal />
