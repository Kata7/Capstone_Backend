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
        {
          id: 1,
          username: 'swag',
          address: '1165 Revere Point Road',
          city: 'Virginia Beach',
          state: 'Virginia',
          geo_lat: 69,
          geo_long: 420,
          distance: 10
        }
      ]);
    });
};
