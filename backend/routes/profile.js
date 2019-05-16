const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Profile = require("../models/Profile");
const User = require("../models/User");

router.get("/test", (req, res) => {
  res.json("Hello");
});

//get current users profile
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          return res.status(400).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.json(err));
  }
);

//create and update user profile
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      const newExp = {
        jobtitle: req.body.jobtitle,
        company: req.body.company,
        description: req.body.description
      };
      Profile.experience.unshift(newExp);
      Profile.save().then(profile => {
        res.json(profile);
      });
    });
  }
);

module.exports = router;
