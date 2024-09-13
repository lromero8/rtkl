<script lang='ts'>
    import Article from '$lib/article/+page.svelte';
    import Noun from '$lib/noun/+page.svelte';

    export let isGameOver = false;
    export let score = 0;

</script>

<div class="rtkl-container">
    <Noun bind:isGameOver={isGameOver} bind:score={score}/>
    <Article />
</div>

<style>
    div.rtkl-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>