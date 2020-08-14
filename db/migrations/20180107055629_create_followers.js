'use strict';

exports.up = (knex) =>
	knex.schema.createTable('followers', (table) =>
	{
		table.increments();
		table.timestamps();
		table
			.integer('user').unsigned()
			.notNullable()
			.references('users.id')
			.onDelete('CASCADE');
		table
			.integer('follower').unsigned()
			.notNullable()
			.references('users.id')
			.onDelete('CASCADE');
		table.unique(['follower', 'user']);
	});

exports.down = (knex) => knex.schema.dropTableIfExists('followers');
