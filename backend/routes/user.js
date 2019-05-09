const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/', (req, res) => {
  res.json({
    msg: 'Test Works'
  });
});

router.post('/register', (req, res) => {
  User.findOne({
    email: req.body.email
  }).then((user) => {
    if (user) {
      return res.status(400).send();
    } else {
      //const avatar = 
      const newUser = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      });
      newUser.save().then((user) => res.json(user)).catch((err) => console.log(err));
    }
  })
});

module.exports = router;