const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const keys = require('../config/keys');

const validateRegisterInput = require('../validation/registration');
const validateloginInput = require('../validation/login');

const User = require('../models/User');

router.get('/', (req, res) => {
  res.json({
    msg: 'Test Works'
  });
});

router.post('/register', (req, res) => {
  const {
    errors,
    isValid
  } = validateRegisterInput(req.body);
  //console.log(req.body);

  if (isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({
    email: req.body.email
  }).then((user) => {
    if (user) {
      return res.status(400).json({
        error: 'user exists'
      });
    } else {
      //const avatar = 
      const newUser = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) {
            throw err;
          }
          newUser.password = hash;
          newUser.save().then((user) => res.json(user)).catch((err) => console.log(err));
        });
      });
    }
  })
});

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({
    email
  }).then((user) => {
    const {
      errors,
      isValid
    } = validateloginInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }

    if (!user) {
      errors.email = 'email not found';
      return res.status(400).json(errors);
    }

  });
});

module.exports = router;