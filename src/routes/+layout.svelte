<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<div class="navbar bg-base-100 shadow-sm">
		<div class="navbar-start">
			<div class="dropdown">
				<div tabIndex={0} role="button" class="btn btn-ghost lg:hidden"></div>
			</div>
			<a href="/" class="btn text-xl btn-ghost">Animal Adoption CRUD</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul
				tabIndex={0}
				class="dropdown-content menu z-1 mt-3 w-52 menu-sm rounded-box bg-base-100 p-2 shadow"
			>
				<li><a href="/animals">Animals</a></li>
			</ul>
		</div>
		<div class="navbar-end">
			<a href="/animals/create" class="btn">Create</a>
		</div>
	</div>
</svelte:head>

<div class="container mx-auto mt-[10%]">
	<div class="">
		{@render children?.()}
	</div>
</div>
