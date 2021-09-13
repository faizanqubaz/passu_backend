exports.up = function (knex) {
  return knex.schema.table("secondaryAccounts", (table) => {
    table
      .integer("primaryAccountId")
      .references("id")
      .inTable("primaryAccounts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {};
