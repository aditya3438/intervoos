const validator = require("validator");
const isEmpty = require("./isEmpty");

const validateNotesInput = data => {
  let errors = {};

  data.notes = !isEmpty(data.notes) ? data.notes : "";

  if (validator.isEmpty(data.email)) {
    errors.email = "Notes is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
module.exports = validateNotesInput;
