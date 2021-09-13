exports.up = function (knex) {
  return knex.schema.table("branches", (table) => {
    table
      .integer("tenantId")
      .references("id")
      .inTable("tenants")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {
  return table.schema.table("branches", (table) => {
    table.dropForeign("tenantId");
  });
};
