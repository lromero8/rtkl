<script lang='ts'>
    import Article from '$lib/article/article.svelte';
    import Noun from '$lib/noun/noun.svelte';
</script>

<div class="rtkl-container">
    <Noun />
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