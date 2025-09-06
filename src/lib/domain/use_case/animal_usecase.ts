import { inject, injectable } from 'inversify';

// import { AnimalRepository } from '$lib/domain/repository';
import type { AnimalRepositoryImpl } from '$lib/infrastructure/repository';

@injectable()
export class AnimalUseCase {
	constructor(@inject('AnimalRepository') private repository: AnimalRepositoryImpl) {}

	async getAll() {
		return this.repository.getAll();
	}
}
