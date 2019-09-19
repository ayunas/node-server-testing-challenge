
exports.up = function(knex) {
   return knex.schema.createTable('areacodes', tbl => {
        tbl.increments();
        tbl.integer('areacode', 3).unique().notNullable();
        tbl.string('city',32);
        tbl.string('state',16).notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('areacodes');
};
