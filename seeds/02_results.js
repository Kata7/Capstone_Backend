
exports.seed = function(knex, Promise) {
  const tableName = 'results'
  return knex(tableName).del()
    .then(function () {
      return knex(tableName).insert([
        // user_id (int)
        // restaurant_id (int)
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
