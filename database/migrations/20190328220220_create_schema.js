exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('authentication', function(table) {
      table.increments().primary();
      table.string('login_id', 15).notNullable();
      table.text('password').notNullable();
      table.timestamps(false, true);
    })
    .createTable('courses', function(table) {
      table.increments('course_id').primary();
      table.string('course_code', 5);
      table.string('course_name', 50);
      table.timestamps(false, true);
    })
    .createTable('units', function(table) {
      table.increments('unit_id').primary();
      table.string('unit_code', 10);
      table.string('unit_name', 50);
      table.timestamps(false, true);
      table
        .integer('course_id')
        .unsigned()
        .references('course_id')
        .inTable('courses')
        .notNull()
        .onDelete('cascade')
        .index();
    })
    .createTable('students', function(table) {
      table.increments('student_id').primary();
      table.string('first_name', 10);
      table.string('last_name', 10);
      table.timestamps(false, true);
      table
        .integer('course_id')
        .unsigned()
        .references('course_id')
        .inTable('courses')
        .notNull()
        .onDelete('cascade')
        .index();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('authentication')
    .dropTableIfExists('courses')
    .dropTableIfExists('units')
    .dropTableIfExists('students');
};
