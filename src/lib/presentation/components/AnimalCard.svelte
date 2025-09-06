<script lang="ts">
	import type { Animal } from '$lib/domain/model';

	export let animal: Animal;
</script>

<div class="card bg-gray-100 shadow-sm">
	<figure>
		<img src={animal.name} alt={animal.name} />
	</figure>
	<div class="card-body">
		<h2 class="card-title text-gray-700">
			{animal.name}
		</h2>
		<p>
			{animal.description}
		</p>
		<div class="card-actions justify-end">
			<div class="badge badge-outline">Fashion</div>
			<div class="badge badge-outline">Products</div>
		</div>
	</div>
</div>
