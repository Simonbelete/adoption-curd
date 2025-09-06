import axios from 'axios';
import { fail } from '@sveltejs/kit';
import { AnimalSchema } from '$lib/domain/schemas';
import type { Actions } from './$types';
import { data_provider } from '$lib/providers/data-provider';

export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const raw = Object.fromEntries(form);

		const parsed = AnimalSchema.safeParse(raw);

		if (!parsed.success) {
			return fail(400, {
				data: raw,
				errors: parsed.error.flatten().fieldErrors
			});
		}

		try {
			const response = await data_provider.post('/animals', parsed.data);
			return { status: 201, data: response.data, message: 'Successfully created' };
		} catch (err) {
			if (axios.isAxiosError(err)) {
				return {
					status: err.response?.status ?? 500,
					message: err.response?.data?.message ?? 'Something went wrong',
					data: err.response?.data
				};
			} else {
				return {
					status: 500,
					message: 'Unexpected error occurred'
				};
			}
		}
	}
} satisfies Actions;
