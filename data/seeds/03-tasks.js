
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('tasks').insert([
        { project_id: 001, description: 'Purpose for this task', notes: 'Background or goals moving forward' }
      ]);
};