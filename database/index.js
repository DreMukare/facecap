const knex = require('knex')(require('../config/knexfile'));

function authenticate(data) {
  return knex
    .select('password')
    .from('authentication')
    .where('login_id', data.loginID)
    .then(
      function(rows) {
        const [user] = rows;
        if (user) {
          return require('bcrypt')
            .compare(data.password, user.password)
            .then(valid => ({ [valid && 'token']: 'token' }));
        }
      },
      function(err) {
        console.error('[error|db|query]', err.message);
        return Promise.resolve();
      }
    );
}

function fetchAll(tableName) {
  return knex.select().from(tableName);
}

module.exports = {
  authenticate,
  fetchAll
};
