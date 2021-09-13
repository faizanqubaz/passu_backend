exports.up = function (knex) {
  return knex.schema.createTable("transactionItems", (table) => {
    table.increments("id").primary();
    table.integer("type");
    table.string("narration");
    table.float("amount");
    table.string("status");
    table.timestamp("createdAt").defaultTo(knex.fn.now());
    table.timestamp("updatedAt").defaultTo(knex.fn.now());
    table.string("createdBy");
    table.string("updatedBy");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("transactionItems");
};
