const environment = process.env.NODE_ENV || 'test';
const config = require(`./config.${environment}`);

function getKnexConfig() {
  return config.knex;
}

module.exports = {
  getKnexConfig
};
