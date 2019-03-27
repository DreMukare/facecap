const mysql = require('mysql');
const config = require('../config');

const connection = mysql.createConnection(config.getDatabaseConfig());
connection.connect(function(err) {
  if (err) {
    return console.error(
      '[error|db]',
      'Unable to establish database connection',
      err
    );
  }
  console.log('Established connection to database');
});

function authenticate(user, callback) {
  connection.query(
    {
      sql: 'SELECT password FROM `authentication` WHERE `login_id` = ?',
      values: [user.loginID]
    },
    function(err, results) {
      if (err) {
        console.error('[error|db|query]', 'unable to fetch query');
        callback(err);
      }
      if (results.length) {
        require('bcrypt').compare(user.password, results[0].password, function(
          err,
          valid
        ) {
          if (err) {
            console.error('[error]', 'unable to decode data');
            callback(err);
          }
          callback(null, valid);
        });
      }
    }
  );
}

module.exports = {
  authenticate
};
