
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
    console.log(table)

    table.string('id').primary();
    table.string('name').notNulable();
    table.string('email').notNulable();
    table.string('whatsapp').notNulable();
    table.string('city').notNulable();
    table.string('uf', 2).notNulable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
