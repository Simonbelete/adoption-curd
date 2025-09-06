import { json, type RequestHandler } from '@sveltejs/kit';
import container from '$lib/inversify.config';

import { AnimalUseCase } from '$lib/domain/use_case';

export const GET: RequestHandler = async () => {
	const use_case = container.get(AnimalUseCase);

	const users = await use_case.getAll();

	return new Response(JSON.stringify(users), {
		headers: { 'Content-Type': 'application/json' }
	});
};

export async function POST({ request }) {
	const use_case = container.get(AnimalUseCase);

	const data = await request.json();

	const result = await use_case.create(data);

	return json(result[0], { status: 201 });
}
