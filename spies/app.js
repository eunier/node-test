var db = require('./db.js');

module.exports.handleSignup = (email, password)=> {
  // check if email already exits
  db.saveUser({email, password});
  
  // vase teh user to the database
  // send the welcome email
};