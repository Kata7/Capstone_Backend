
exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurants', (table) => {
    // id, name, address, city, state, geo_lat, geo_long, MTWTFSS (7), phone_number, url, price_rank, description
    table.increments('id');
    table.string('name').notNullable();
    table.text('address').notNullable();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.decimal('geo_lat', 10, 7).notNullable();
    table.decimal('geo_long', 10, 7).notNullable();
    table.string('monday').notNullable();
    table.string('tuesday').notNullable();
    table.string('wednesday').notNullable();
    table.string('thursday').notNullable();
    table.string('friday').notNullable();
    table.string('saturday').notNullable();
    table.string('sunday').notNullable();
    table.string('phone_number').notNullable();
    table.text('url').notNullable();
    table.integer('price_rank').notNullable();
    table.text('description').notNullable();
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('restaurants')
  
};
