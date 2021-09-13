
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('userId').primary()
    table.string('firstName')
    table.string('lastName')
    table.string('email').notNullable()
    table.string('password').notNullable()
    table.string('confirmPassword').notNullable()
    table.string('status')
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('users')
};
