'use strict';

exports.up = (knex) =>
	knex.schema.createTable('comments', (table) =>
	{
		table.increments();
		table.timestamps();
		table.text('body').notNullable();
		table
			.integer('author').unsigned()
			.notNullable()
			.references('users.id')
			.onDelete('CASCADE');
		table
			.integer('article').unsigned()
			.notNullable()
			.references('articles.id')
			.onDelete('CASCADE');
	});

exports.down = (knex) => knex.schema.dropTableIfExists('comments');
