<script lang="ts">
    import type { Article } from '$lib/article';
    import { articleStore } from '../../stores/store';

    function updateSelected(article: Article) {
        articleStore.set(article);
    }

</script>

<div class="rtkl-articles-container">
    <button on:click={() => updateSelected('die')}>die</button>
    <button on:click={() => updateSelected('der')}>der</button>
    <button on:click={() => updateSelected('das')}>das</button>
</div>

<style>

    .rtkl-articles-container {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }

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
  
    button:hover {
        background-color: #2196f3;
        color: #fff;
    }
</style>