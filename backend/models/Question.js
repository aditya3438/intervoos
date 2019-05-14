const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  question: {
    type: String
  },
  answer: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      answer: {
        type: String
      }
    }
  ],
  notes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      note: {
        type: String
      }
    }
  ]
});

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;
