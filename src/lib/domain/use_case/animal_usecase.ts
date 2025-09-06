import { inject, injectable } from 'inversify';

import type { AnimalRepositoryImpl } from '$lib/infrastructure/repository';
import type { Animal } from '$lib/domain/model';

@injectable()
export class AnimalUseCase {
	constructor(@inject('AnimalRepository') private repository: AnimalRepositoryImpl) {}

	async getAll() {
		return this.repository.getAll();
	}

	async create(data: Animal) {
		return this.repository.create(data);
	}

	async getById(id: number) {
		return this.repository.getById(id);
	}

	async update(id: number, data: Partial<Animal>) {
		return this.repository.update(id, data);
	}

	async delete(id: number) {
		return this.repository.delete(id);
	}
}
