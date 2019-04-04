
exports.up = function(knex, Promise) {
  knex.schema.createTable('images', (table) => {
    table.increments('id');
    table.integer('restaurant_id').notNullable();
    table.text('url').notNullable();
  })
  
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('images')
};
