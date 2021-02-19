module.exports = (sequelize, Sequelize) => {
  const VolSchema = sequelize.define('vol', {
    volId: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nom: { type: Sequelize.STRING(255), allowNull: false },
    villDepart: { type: Sequelize.STRING(255), allowNull: false },
    villeDarrive: { type: Sequelize.STRING(255), allowNull: false },
    dateDepart: { type: Sequelize.STRING(255), allowNull: false },
    dateDarrive: { type: Sequelize.STRING(255), allowNull: false },
    // LheurDepart: { type: Sequelize.STRING(255), allowNull: false },
    // dLheurDarrive: { type: Sequelize.STRING(255), allowNull: false },
    prix: Sequelize.FLOAT(11),
  });
  return VolSchema;
};
