import type { RequestHandler } from '@sveltejs/kit';
import container from '$lib/inversify.config';

import { AnimalUseCase } from '$lib/domain/use_case';

export const GET: RequestHandler = async () => {
	const use_case = container.get(AnimalUseCase);

	const users = await use_case.getAll();

	return new Response(JSON.stringify(users), {
		headers: { 'Content-Type': 'application/json' }
	});
};
