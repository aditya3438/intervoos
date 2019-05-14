const express = require("express");
const router = express.Router();
const passport = require("passport");

const Question = require("../models/Question");

const validateNotesInput = require("../validation/note");

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const questionArr = [
      "Tell me about yourself",
      "What are your hobbies",
      "What are your Talents"
    ];
    const length = questionArr.length;
    const randomnumber = Math.floor(Math.random() * length);

    const newQue = new Question({
      question: questionArr[randomnumber],
      user: req.user.id
    });

    newQue.save().then(question => {
      res.json(question).catch(err => res.json(err));
    });
  }
);

router.post(
  "/notes",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Question.findOne({
      user: req.user.id
    }).then(question => {
      if (!question) {
        return res.json({
          question: "No question found"
        });
      }
      if (
        question.notes.filter(note => note.user.toString() === req.user.id)
          .length > 0
      ) {
        return res
          .status(400)
          .json({ notes: "You have already viewed this question" });
      }
      question.notes.unshift({
        user: req.user.id,
        note: req.body.notes
      });
      question.save().then(question => {
        res.json(question);
      });
    });
  }
);

module.exports = router;
