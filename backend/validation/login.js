const validator = require('validator');
const isEmpty = require('./isEmpty');

const validateLoginInput = (data) => {
  let errors = {}

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
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
    errors.password = 'Password should be between 6 and 12 charecters';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}
module.exports = validateLoginInput;