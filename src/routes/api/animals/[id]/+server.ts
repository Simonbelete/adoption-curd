import { json } from '@sveltejs/kit';
import container from '$lib/inversify.config';

import { AnimalUseCase } from '$lib/domain/use_case';

export async function GET({ params }) {
	const use_case = container.get(AnimalUseCase);
	const id = Number(params.id);
	const data = await use_case.getById(id);

	return data ? json(data[0]) : json({ error: 'Not found' }, { status: 404 });
}

export async function PUT({ request, params }) {
	const use_case = container.get(AnimalUseCase);
	const id = Number(params.id);
	const data = await request.json();

	const result = await use_case.update(id, data);

	return json(result, { status: 200 });
}

export async function DELETE({ params }) {
	const use_case = container.get(AnimalUseCase);
	const id = Number(params.id);
	const data = await use_case.getById(id);

	return json(data);
}
