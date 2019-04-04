
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    // id, name, address, city, state, geo_lat, geo_long, MTWTFSS (7), phone_number, url, price_rank, description
    table.increments('id');
    table.string('username').notNullable();
    table.text('address').notNullable();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.decimal('geo_lat', 10, 7).notNullable();
    table.decimal('geo_long', 10, 7).notNullable();
    table.integer('distance').notNullable().defaultTo(0);
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
  
};
