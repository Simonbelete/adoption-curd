<script lang="ts">
	export let form;
</script>

<div class="flex flex-col items-center justify-center">
	{#if form}
		<div
			role="alert"
			class="mb-14 alert w-full {form?.status == 201 ? 'alert-success' : 'alert-error'}"
		>
			<span class="text-white">{form?.message}. {form?.data}</span>
		</div>
	{/if}

	<form method="POST">
		<h2 class="mb-5 text-2xl">Create</h2>

		<fieldset class="fieldset">
			<legend class="fieldset-legend">Animal name</legend>
			<input type="text" class="input" placeholder="Type here" name="name" />
			{#if form?.errors?.name}
				<p class="label mt-1 text-sm text-red-500">{form.errors.name[0]}</p>
			{/if}
		</fieldset>

		<button class="btn mt-10 w-full btn-accent">Create</button>
	</form>
</div>
