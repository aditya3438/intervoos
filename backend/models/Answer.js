const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  question: {
    type: Schema.Types.ObjectId,
    ref: "Question"
  },
  answer: {
    type: String
  }
});

const Answer = mongoose.model("Answer", AnswerSchema);

module.exports = Answer;
