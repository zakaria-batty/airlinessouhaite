const auth = require('./auth');
const db = require('../config/db.config.js');
const VolSchema = db.volSchema;

// Post offer
exports.create = (req, res) => {
  VolSchema.create({
    ...req.body,
  }).then((user) => {
    res.send({ users: user });
  });
};

// seatch offer
exports.searchOffres = async (req, res) => {
  console.log(req.body);
  const { from, to } = req.body;
  try {
    const result = await VolSchema.findAll({
      where: {
        villDepart: from,
        villeDarrive: to,
      },
    });

    if (result) {
      res.render('offers', { offres: result });
    }
  } catch (error) {
    res.render(`error server ${error}`);
  }
};

// FETCH all offers
exports.findAll = (req, res) => {
  VolSchema.findAll().then((vol) => {
    res.render('index', { vols: vol });
  });
};

// Find a vol by Id
exports.findById = (req, res) => {
  const id = req.params.id;
  if (req.session.clients != undefined) {
    VolSchema.findByPk(id)
      .then((offre) => {
        res.render('payment', { offre: offre });
      })
      .catch((error) => console.log(error));
  } else {
    console.log('cant find session user');
    req.session.offre = {
      id: req.params.id,
    };
    res.redirect('/singup');
    console.log('khask tsagal');
  }
};

// Update a user
// exports.update = (req, res) => {
//   const id = req.params.volId;
//   VolSchema.update(
//     {
//       ...req.body,
//     },
//     { where: { volId: id } }
//   ).then(() => {
//     res.status(200).send(`updated successfully a vol with id = ${id}`);
//   });
// };

// Delete a user by Id
// exports.delete = (req, res) => {
//   const id = req.params.volId;
//   VolSchema.destroy({
//     where: { volId: id },
//   }).then(() => {
//     res.status(200).send(`deleted successfully a vol with id =${id}`);
//   });
// };
