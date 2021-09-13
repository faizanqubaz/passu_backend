exports.up = function (knex) {
  return knex.schema.table("transactionItems", (table) => {
    table
      .integer("transactionId")
      .references("id")
      .inTable("transactions")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table
      .integer("accountId")
      .references("id")
      .inTable("accounts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {
  knex.schema.table("transactionItems", (table) => {
    table.dropForeign("transactionId");
    table.dropForeign("accountId");
  });
};
