
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('electives').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').del();
    });
};
