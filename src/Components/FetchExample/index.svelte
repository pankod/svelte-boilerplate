<script>
  import { onMount } from "svelte";
  import { Http } from "@Services/Http.js";

  let data = [];

  onMount(async function() {
    console.log(process.env.API_URL);
    const response = await Http.Request('GET', '/link/');
    data = response;
  });
</script>

<style src="./style.scss">

</style>

<ul>
  {#each data as link}
    <li>
      <a href={link.url}>{link.title}</a>
    </li>
  {/each}
</ul>
