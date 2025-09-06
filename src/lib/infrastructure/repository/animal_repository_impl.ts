import { LibSQLDatabase } from 'drizzle-orm/libsql';
import { inject, injectable } from 'inversify';

import { animals } from '$lib/infrastructure/persistence/drizzle';
import { BaseRepositoryImpl } from './base_repository_impl';

@injectable()
export class AnimalRepositoryImpl extends BaseRepositoryImpl<typeof animals> {
	constructor(@inject(LibSQLDatabase) db: LibSQLDatabase) {
		super(db, animals);
	}
}
