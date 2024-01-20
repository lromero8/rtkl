<script lang="ts">
    import { articleStore } from '../../stores/store';
    import type { Article } from '../noun/noun';

    function updateSelected(article: Article) {
        articleStore.set(article);
    }

</script>

<div>
    <button on:click={() => updateSelected('die')}>die</button>
    <button on:click={() => updateSelected('der')}>der</button>
    <button on:click={() => updateSelected('das')}>das</button>
</div>

<style>
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
</style>