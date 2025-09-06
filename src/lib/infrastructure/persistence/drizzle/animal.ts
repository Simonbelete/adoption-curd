import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const animals = sqliteTable('animals', {
	id: integer('id').primaryKey(),
	name: text('name', { length: 100 }).notNull()
});
