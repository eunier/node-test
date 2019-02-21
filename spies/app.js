var db = require('./db.js');

module.exports.handleSignup = (email, password)=> {
  // check if email already exits
  db.saveUser({email, password});
};