
exports.seed = function(knex, Promise) {
const tableName = 'users'
  return knex(tableName).del()
    .then(function () {
      return knex(tableName).insert([
        // id (int)
        // username (string)
        // address (text)
        // city (string)
        // state (string)
        // geo_lat (decimal)
        // geo_long (decimal)
        // distance (integer)
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
