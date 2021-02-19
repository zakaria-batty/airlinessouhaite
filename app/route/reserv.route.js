module.exports = function (app) {
    const reservSchema = require('../controller/reservation.controller');
  
    // Create a new Customer
    app.post('/api/reserv', reservSchema.insertres);
  
    // Retrieve all Customer
    app.get('/api/allres', reservSchema.findAll);
  
    // Retrieve a single Customer by Id
    // app.get('/api/user/:userId', UserSchema.findById);
  
    // Update a Customer with Id
    // app.put('/api/user/:userId', UserSchema.update);
  
    // Delete a Customer with Id
    // app.delete('/api/user/:userId', UserSchema.delete);
  };