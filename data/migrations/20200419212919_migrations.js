
exports.up = function(knex) {
  return knex.schema
    .createTable("projects", table => {
      table.increments();
      table.varchar("name", 128).notNullable();
      table.varchar("description", 400);
      table.boolean("completed").defaultTo(false);
    })
    .createTable("resources", table => {
      table.increments();
      table.varchar("name", 128).notNullable().unique();
      table.varchar("description", 400);
    })
    .createTable("tasks", table => {
      table.increments();
      table.integer("project_id").unsigned().references("projects.id")
      table.varchar("description", 400).notNullable();
      table.varchar("notes", 400);
      table.boolean("completed").defaultTo(false);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects")
};