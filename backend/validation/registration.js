const validator = require('validator');
const isEmpty = require('./isEmpty');

const validateRegisterInput = (data) => {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : '';
  data.username = !isEmpty(data.username) ? data.username : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  if (!validator.isLength(data.name, {
      min: 3,
      max: 25
    })) {
    errors.name = 'Name should be between 3 and 25 charecters';
  }
  if (validator.isEmpty(data.name)) {
    errors.name = 'name feild is required';
  }
  if (!validator.isLength(data.username, {
      min: 3,
      max: 25
    })) {
    errors.username = 'UserName should be between 3 and 25 charecters';
  }
  if (validator.isEmpty(data.username)) {
    errors.username = 'username feild is required';
  }
  if (validator.isEmpty(data.email)) {
    errors.email = 'Email feild is required';
  }
  if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }
  if (!validator.isLength(data.password, {
      min: 6,
      max: 12
    })) {
    errors.password = 'Password should be between 6 to 12 charecters';
  }

  if (validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm password is required';
  }
  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}

module.exports = validateRegisterInput;