
exports.up = function(knex, Promise) {
  return knex.schema.createTable('images', (table) => {
    table.increments('id');
    table.integer('restaurant_id').notNullable();
    table.text('url').notNullable();
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('images')
};
