const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const keys = require("../config/keys");

const validateRegisterInput = require("../validation/registration");
const validateloginInput = require("../validation/login");

const Tutor = require("../models/Tutor");

router.post("/tutorregister", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  //console.log(req.body);

  if (isValid) {
    return res.status(400).json(errors);
  }
  Tutor.findOne({
    email: req.body.email
  }).then(tutor => {
    if (tutor) {
      return res.status(400).json({
        error: "Tutor exists"
      });
    } else {
      //const avatar =
      const newTutor = new Tutor({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newTutor.password, salt, (err, hash) => {
          if (err) {
            throw err;
          }
          newTutor.password = hash;
          newTutor
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

router.post("/tutorlogin", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  Tutor.findOne({
    email
  }).then(user => {
    const { errors, isValid } = validateloginInput(req.body);
    if (isValid) {
      return res.status(400).json(errors);
    }

    if (!user) {
      errors.email = "email not found";
      return res.status(400).json(errors);
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name
        };
        jwt.sign(
          payload,
          keys.secretOrkey,
          {
            expiresIn: 3600
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res.status(400).json({
          password: "password incorrect"
        });
      }
    });
  });
});
//check for protected route
router.get(
  "/current",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    console.log(req.tutor);
  }
);

module.exports = router;
