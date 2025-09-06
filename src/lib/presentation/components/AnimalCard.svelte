<script lang="ts">
	import type { Animal } from '$lib/domain/model';

	export let animal: Animal;
</script>

<a class="card bg-gray-100 shadow-sm" href="/animals/{animal.id}">
	<figure>
		<img src={animal?.image} alt={animal.name} />
	</figure>
	<div class="card-body">
		<h2 class="card-title text-gray-700">
			{animal.name}
		</h2>
		<p>
			{animal.description}
		</p>
		<div class="card-actions justify-end">
			<!-- <div class="badge badge-outline">Age</div> -->
			<!-- <div class="badge badge-outline">-</div> -->
		</div>
	</div>
</a>
