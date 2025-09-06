import { animals } from '$lib/infrastructure/persistence/drizzle';
import type { BaseRepository } from './base_repository';

export interface AnimalRepository extends BaseRepository<typeof animals> {}
