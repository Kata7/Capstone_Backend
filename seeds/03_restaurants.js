
exports.seed = function(knex, Promise) {
  const tableName = restaurants
  return knex(tableName).del()
    .then(function () {
      return knex(tableName).insert([
        // id (int)
        // name (string)
        // address (text)
        // city (string)
        // state (string)
        // geo_lat (decimal)
        // geo_long (decimal)
        // m,t,w,t,f,s,s (7x string)
        // phone_number (string)
        // url (text)
        // price_rank (int)
        // description (text)
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
