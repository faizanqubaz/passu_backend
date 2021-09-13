exports.up = function (knex) {
  return knex.schema.createTable("secondaryAccounts", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.timestamp("createdAt").defaultTo(knex.fn.now());
    table.timestamp("updatedAt").defaultTo(knex.fn.now());
    table.string("createdBy");
    table.string("updatedBy");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("secondaryAccounts");
};
