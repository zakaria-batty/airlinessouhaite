module.exports = (sequelize, Sequelize) => {
    const reservationSchema = sequelize.define('reservation', {
        resrId: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
          },
          userId: Sequelize.INTEGER(11),
          volId: Sequelize.INTEGER(11),
    });
    return reservationSchema;
  };