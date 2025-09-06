import type { LibSQLDatabase } from 'drizzle-orm/libsql';

export type GenericDrizzleDatabase<
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	TSchema extends Record<string, unknown> = Record<string, never>
> = LibSQLDatabase;
