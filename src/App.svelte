<script>
  import { onMount } from "svelte";
  import 'whatwg-fetch'

  let data = [];

  onMount(async function() {
    const response = await window.fetch("https://academy.valentinog.com/api/link/");
    const json = await response.json();
    data = json;
  });
</script>

<style src="./test.scss"></style>


<ul>
  {#each data as link}
    <li>
      <a href={link.url}>{link.title}</a>
    </li>
  {/each}
</ul>
