const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: 0,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.userSchema = require('../model/user.model.js')(sequelize, Sequelize);
db.volSchema = require('../model/vol.model')(sequelize, Sequelize);
db.reservationSchema = require('../model/reservation.model')(sequelize, Sequelize);

module.exports = db;
