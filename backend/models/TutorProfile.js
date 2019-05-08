const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TutorProfileSchema = new Schema({
  tutor: {
    type: Schema.Types.ObjectId,
    ref: "Tutor"
  },
  experience: [
    {
      jobtitle: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date.now
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ]
});

const TutorProfile = mongoose.model("TutorProfile", TutorProfileSchema);

module.exports = TutorProfile;
