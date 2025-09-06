import type { Animal } from '../model';
import type { BaseRepository } from './base_repository';

export interface AnimalRepository extends BaseRepository<Animal> {}
