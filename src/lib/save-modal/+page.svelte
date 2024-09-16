<script lang="ts">
    import type { Score } from "$lib/score";
    import { addDoc, collection } from "firebase/firestore";
    import { isGameOverStore, savedScoresStore, scoreStore } from "../../stores/store";
    import { db } from "$lib/firebase/firebase";

    let newScore: Score = {
        user: '',
        language: 'german',
        score: 0
    };
    let showError = false;
    let errorMsg: unknown;
    let showLeaderboard = false;

    function saveScore() {
        try {
            showError = false;
            newScore.score = $scoreStore;
            newScore.language = 'german';

            // Check if nickname already exists in the store (instead of fetching again)
            if ($savedScoresStore.some(sd => sd.user === newScore.user)) {
                throw Error('Nickname already exists!');
            }
            else {
                // Save the score to Firestore
                saveDoc()
    
                // Directly update the store with the new score (no need to fetch from Firestore again)
                savedScoresStore.update(scores => [...scores, newScore]);
    
                showLeaderboard = true;
    
                console.log(`${newScore.user}'s' scored of ${$scoreStore} successfully saved!`);
            }

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
        showLeaderboard = false;
        newScore = {
            user: '',
            language: 'german',
            score: 0
        }
    }


</script>

{#if $isGameOverStore}

  <div class="rtkl-modal-overlay">
    <div class="rtkl-modal">
      <div class="rtkl-modal-header">
        <h2>{showLeaderboard ? 'Leaderboard' : 'Game Over'}</h2>
      </div>
      <div class="rtkl-modal-body">

        {#if showLeaderboard}
            <table class="rtkl-modal-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {#each $savedScoresStore.sort((a, b) => b.score - a.score) as savedScore}
                        <tr>
                            <td>{savedScore.user}</td>
                            <td>{savedScore.score}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        {:else}
            <p class="rtkl-score">Score: {$scoreStore} points</p>

            <div>
                <input type="text" placeholder="rtklEater123" bind:value={newScore.user}>
            </div>

            {#if showError}
                <p class="rtkl-error-msg">{errorMsg}</p>
            {/if}

        {/if}

      </div>
      <div class="rtkl-modal-footer">
        <button class="rtkl-close" on:click={reset}>Close</button>
        {#if !showLeaderboard}
            <button class="rtkl-save" on:click={saveScore}>Save</button>
        {/if}
      </div>
    </div>
  </div>
{/if}


<style lang="scss">

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
      overflow-y: auto;
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

    table.rtkl-modal-table {
        border-collapse: collapse;
        width: 100%;
        @media screen and (max-width: 750px) {
            font-size: 0.8rem;
        }

        th,
        td {
            text-align: left;
            padding: 5px;
        }

        th {
            background-color: #2196f3;
            color: #f2f2f2;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        th:hover {
            background-color: #595d65;
        }

        tr:hover {
            background-color: #f5f5f5;
            cursor: pointer;
        }
    }
</style>
