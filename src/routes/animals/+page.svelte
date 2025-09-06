<script lang="ts">
	import type { PageProps } from './$types';
	import { AnimalCard } from '$lib/presentation/components';

	let { data }: PageProps = $props();
</script>

<div class="grid grid-cols-4 gap-4">
	{#each data.animals as item}
		<AnimalCard animal={item} />
	{/each}
</div>
