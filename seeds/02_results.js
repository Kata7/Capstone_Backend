
exports.seed = function(knex, Promise) {
  const tableName = 'results'
  return knex(tableName).del()
    .then(function () {
      return knex(tableName).insert([
        // user_id (int)
        // restaurant_id (int)
      ]);
    });
};
