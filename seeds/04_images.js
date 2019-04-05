
exports.seed = function(knex, Promise) {
  const tableName = images
  return knex(tableName).del()
    .then(function () {
      return knex(tableName).insert([
      // id (int)
      // restaurant_id (int)
      // url (text)
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
