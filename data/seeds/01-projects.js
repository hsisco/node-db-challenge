
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'Project Name', description: 'What is this project about?' }
      ]);
};