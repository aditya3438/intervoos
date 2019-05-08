const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  question: {
    type: Schema.Types.ObjectId,
    ref: "Question"
  },
  notes: {
    type: String
  }
});

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
