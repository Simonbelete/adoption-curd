<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>


<ul>
	{#each data.animals as user}
		<li>{user.name}</li>
	{/each}
</ul>
