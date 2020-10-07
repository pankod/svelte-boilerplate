<script>
    import { onMount } from 'svelte';
    import { Http } from '@Services';

    let data = [];

    onMount(async function() {
        const response = await Http.Request('GET', '/link/');
        data = response;
    });
</script>

<style src="./style.scss">

</style>

<div class="fetch-example">
    <ul>
        {#each data as link}
            <li>
                <a href={link.url}>{link.title}</a>
            </li>
        {/each}
    </ul>
</div>
