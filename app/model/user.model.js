const bcrypt = require('bcrypt');
module.exports = (sequelize, Sequelize) => {
  const UserSchema = sequelize.define('clients', {
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    salt: Sequelize.STRING,
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    telephone: { type: Sequelize.STRING(255), allowNull: false },
  });

  UserSchema.prototype.validPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  return UserSchema;
};
