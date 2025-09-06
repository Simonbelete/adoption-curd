import * as z from 'zod';
import { type InferSelectModel, type InferInsertModel, Table } from 'drizzle-orm';

import { QuerySchema } from '$lib/domain/schemas';

export interface BaseRepository<T extends Table> {
	getAll(filters?: z.infer<typeof QuerySchema>): Promise<InferSelectModel<Table>[]>;

	getById(id: number): Promise<InferSelectModel<Table> | null>;

	create(data: T): Promise<InferInsertModel<Table>>;

	update(id: number, data: Partial<Omit<T, 'id'>>): Promise<T | null>;

	delete(id: number): Promise<null>;
}
