const db = require('../config/db.config.js');
const reservSchema = db.reservationSchema;

// Post a Customer
exports.insertres = async (req, res) => {
  reservSchema
    .create({
      ...req.body,
    })
    .then(() => {
      res.redirect('/');
    });
};

exports.findAll = (req, res) => {
  reservSchema.findAll().then((resr) => {
    res.send({ reserv: resr });
  });
};
