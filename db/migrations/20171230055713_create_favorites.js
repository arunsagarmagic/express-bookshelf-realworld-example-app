'use strict';

exports.up = (knex) =>
	knex.schema.createTable('favorites', (table) =>
	{
		table.increments();
		table.timestamps();
		table
			.integer('user').unsigned()
			.notNullable()

		table
			.foreign("user")
			.references('users.id')
			.onDelete('CASCADE');

		table
			.integer('article').unsigned()
			.notNullable();

		table
			.foreign("article")
			.references('articles.id')
			.onDelete('CASCADE');
		table.unique(['article', 'user']);
	});

exports.down = (knex) => knex.schema.dropTableIfExists('favorites');
