exports.up = function (knex) {
  return knex.schema.createTable("accounts", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.string("status");
    table.timestamp("createdAt").defaultTo(knex.fn.now());
    table.timestamp("updatedAt").defaultTo(knex.fn.now());
    table.string("createdBy");
    table.string("updatedBy");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("accounts");
};
