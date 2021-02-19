const db = require('../config/db.config.js');
const UserSchema = db.userSchema;

// FETCH all Users
exports.findAll = (req, res) => {
  UserSchema.findAll().then((users) => {
    // Send all users
    res.send({ users: users });
  });
};

// Find a user by Id
exports.findById = (req, res) => {
  UserSchema.findById(req.params.userId).then((user) => {
    res.send(user);
  });
};

// Update a user
exports.update = (req, res) => {
  const id = req.params.userId;
  UserSchema.update(
    {
      ...req.body,
    },
    { where: { userId: id } }
  ).then(() => {
    res.status(200).send(`updated successfully a user with id = ${id}`);
  });
};

// Delete a user by Id
exports.delete = (req, res) => {
  const id = req.params.userId;
  UserSchema.destroy({
    where: { userId: id },
  }).then(() => {
    res.status(200).send(`deleted successfully a user with id =${id}`);
  });
};
