import { Container } from 'inversify';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { LibSQLDatabase } from 'drizzle-orm/libsql';
import { env } from '$env/dynamic/private';

import * as schema from '$lib/infrastructure/persistence/drizzle';
import type { AnimalRepository } from '$lib/domain/repository';
import { AnimalRepositoryImpl } from '$lib/infrastructure/repository';
import { AnimalUseCase } from '$lib/domain/use_case';

if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

const client = createClient({ url: env.DATABASE_URL, authToken: env.DATABASE_AUTH_TOKEN });

export const db = drizzle(client, {
	schema
});

const container = new Container();
container.bind<AnimalRepository>('AnimalRepository').to(AnimalRepositoryImpl);
container.bind<AnimalUseCase>(AnimalUseCase).toSelf();
container.bind<LibSQLDatabase<typeof schema>>(LibSQLDatabase).toConstantValue(db);
export default container;
