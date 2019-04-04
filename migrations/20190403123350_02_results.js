
exports.up = function(knex, Promise) {
  return knex.schema.createTable('results', (table) => {
    //user_id, restaurant_id
    table.integer('user_id').notNullable();
    table.integer('restaurant_id').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('results')
};
