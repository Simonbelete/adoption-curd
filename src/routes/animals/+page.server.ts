import type { PageServerLoad } from './$types';

import { data_provider } from '$lib/providers/data-provider';

export const load: PageServerLoad = async () => {
	const animals = (await data_provider.get('/animals')).data;
	return { animals };
};
