<script>
  import { onMount } from "svelte";
  import { Http } from "@Services";

  let data = [];

	async function getData() {
		const response = await Http.Request("GET", "/link/");
    data = response;
	}

  onMount(() => {
		getData();
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
