
exports.up = function(knex) {
  return knex.schema.createTable("generic_table", table => {
    table.increments();
    table.integer("integercolumn").notNullable().unique();
    table.text("textcolumn");
    table.boolean("booleancolumn");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("generic_table")
};