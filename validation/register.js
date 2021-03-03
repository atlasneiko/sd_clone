const Validator = require('validator');
const validText = require('./validText');


module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.username = validText(data.username) ? data.username : "";
  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";
  data.phone = validText(data.phone) ? data.phone : "";

  if(!validator.isLength(data.username, {min: 4, max: 20})) {
    errors.username = "Username must be between 4 and 20 characters.";
  };
  if(Validator.isEmpty(data.username)){
    errors.username = "Username field is required.";
  };
  if(Validator.isEmpty(data.email)){
    errors.email = "Email field is required.";
  };
  if(!Validator.isEmail(data.email)){
    errors.email = "Email is invalid.";
  };
  if(!Validator.isLength(data.password, {min: 8, max: 20})){
    errors.password = "Password must be between 8 to 20 characters.";
  };
  if(Validator.isEmpty(data.password)){
    errors.password = "Password field is required.";
  };
  
}