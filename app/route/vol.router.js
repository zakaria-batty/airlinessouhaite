module.exports = function (app) {
  const VolSchema = require('../controller/vol.controller');

  // Create a new vol
  app.post('/api/createvol', VolSchema.create);

  app.post('/api/search', VolSchema.searchOffres);
  // Retrieve all Customer
  app.get('/', VolSchema.findAll);

  // Retrieve a single Customer by Id
  app.get('/api/vols/:id', VolSchema.findById);

  // Update a Customer with Id
  // app.put('/api/vols/:volId', VolSchema.update);

  // Delete a Customer with Id
  // app.delete('/api/vols/:volId', VolSchema.delete);
};
