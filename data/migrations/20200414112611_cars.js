
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments('id')
      tbl.string("VIN").notNullable().unique().index()
      tbl.string("make").notNullable().index()
      tbl.string("model").notNullable().index()
      tbl.integer("mileage").notNullable()
      tbl.string("type").index()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
};
