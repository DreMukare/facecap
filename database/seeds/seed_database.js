const data = require('./data');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.join(
    knex('courses').del(),
    knex('courses').insert(data.courses),
    knex('units').del(),
    knex('units').insert(data.units),
    knex('students').del(),
    knex('students').insert(data.students)
  );
};
