const environment = process.env.NODE_ENV || 'test';
const config = require(`./config.${environment}`);

function getDatabaseConfig() {
  return config.database;
}

module.exports = {
  getDatabaseConfig
};
