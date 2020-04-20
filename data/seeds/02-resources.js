
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('resources').insert([
        { name: 'Personnel', description: 'Who do we need on this project?' },
        { name: 'Venue', description: 'Where will we host this project?' },
        { name: 'Materials' }
      ]);
};
