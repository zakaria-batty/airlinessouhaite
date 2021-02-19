module.exports = function (app) {
  const UserSchema = require('../controller/user.controller.js');
  const auth = require('../controller/auth.js');
  
  // authefication
  app.post('/api/authenticate', auth.authenticate);

  app.post('/api/logout', auth.logout);

  app.post('/api/register', auth.registerClient);

  // Retrieve all Customer
  app.get('/api/users', UserSchema.findAll);

  // Retrieve a single Customer by Id
  app.get('/api/user/:userId', UserSchema.findById);

  // Update a Customer with Id
  app.put('/api/user/:userId', UserSchema.update);

  // Delete a Customer with Id
  app.delete('/api/user/:userId', UserSchema.delete);
};
