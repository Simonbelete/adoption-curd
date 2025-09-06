import type { PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import { AnimalSchema } from '$lib/domain/schemas';
import type { Actions } from './$types';
import { data_provider } from '$lib/providers/data-provider';
import axios from 'axios';

export const load: PageServerLoad = async ({ params }) => {
	const { id } = params;

	const animals = (await data_provider.get(`/animals/${id}`)).data;

	return { animals };
};

export const actions = {
	default: async ({ request, params }) => {
		const form = await request.formData();
		const raw = Object.fromEntries(form);
		const { id } = params;

		const parsed = AnimalSchema.safeParse(raw);

		if (!parsed.success) {
			return fail(400, {
				data: raw,
				errors: parsed.error.flatten().fieldErrors
			});
		}

		try {
			const response = await data_provider.put(`/animals/${id}`, parsed.data);
			return { status: 201, data: response.data, message: 'Successfully Updated' };
		} catch (err: any) {
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
