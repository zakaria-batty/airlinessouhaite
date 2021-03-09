const db = require('../config/db.config.js');
const UserSchema = db.userSchema;
const bcrypt = require('bcrypt');
//  const session = require("express-session");

const auth = (req, res, next) => {
  if (req.session.clients != undefined) {
    next();
  } else {
    res.send('dsl');
  }
};

// register
exports.registerClient = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashdPassword = await bcrypt.hash(req.body.password, salt);
  UserSchema.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: hashdPassword,
    telephone: req.body.telephone,
  }).then((user) => {
    res.redirect('/signIn');
    // res.json({ message: user });
  });
};

// authenticate
exports.authenticate = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  UserSchema.findOne({ where: { email: email } }).then((clients) => {
    if (clients != undefined) {
      const correct = bcrypt.compareSync(password, clients.password);
      // check if email correct
      if (correct) {
        // check if session offer is not undefined
        req.session.clients = {
          id: clients.id,
        };
        if (req.session.offre != undefined) {
          const volId = req.session.offre.id;
          res.redirect('/api/vols/' + volId);
        } else {
          console.log('good work');
          res.redirect('/');
        }
      } else {
        res.send('undefind');
      }
    } else {
      res.send('acn donne');
    }
  });
  // }
};

exports.logout = (req, res) => {
  req.session.clients = undefined;
  req.session.offre = undefined;
  res.redirect('/');
};
