import type { output } from 'zod';
import { createSelectSchema } from 'drizzle-zod';
import { LibSQLDatabase } from 'drizzle-orm/libsql';
import { inject, injectable } from 'inversify';
import { type InferSelectModel, type InferInsertModel, Table, eq } from 'drizzle-orm';

import type { BaseRepository } from '$lib/domain/repository';
import { QuerySchema } from '$lib/domain/schemas';

// TODO: fix any type
@injectable()
export class BaseRepositoryImpl<T> implements BaseRepository<T> {
	constructor(
		@inject(LibSQLDatabase) protected db: LibSQLDatabase,
		protected schema: Table
	) {}

	async getAll(
		filters?: output<typeof QuerySchema>
	): Promise<InferSelectModel<typeof this.schema>[]> {
		const parsed = QuerySchema.parse(filters ?? {});

		return this.db
			.select()
			.from(this.schema)
			.limit(parsed.limit)
			.offset((parsed.page - 1) * parsed.limit);
	}

	async getById(id: number): Promise<InferSelectModel<typeof this.schema> | null> {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return this.db.select({ id: id as any }).from(this.schema);
	}

	async create(data: T): Promise<InferInsertModel<typeof this.schema>> {
		const parsed = createSelectSchema(this.schema).omit({ id: true }).parse(data);

		return this.db.insert(this.schema).values(parsed).returning();
	}

	async update(id: number, data: Partial<Omit<T, 'id'>>): Promise<T | null> {
		await this.db
			.update(this.schema)
			.set(data)
			.where(eq((this.schema as any).id, id))
			.returning();

		return null;
	}

	async delete(id: number): Promise<null> {
		await this.db.delete(this.schema).where(eq((this.schema as any).id, id));

		return null;
	}
}
