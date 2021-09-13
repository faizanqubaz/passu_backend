exports.up = function (knex) {
  return knex.schema.table("accounts", (table) => {
    table
      .integer("primaryAccountId")
      .references("id")
      .inTable("primaryAccounts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table
      .integer("secondaryAccountId")
      .references("id")
      .inTable("secondaryAccounts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {};
