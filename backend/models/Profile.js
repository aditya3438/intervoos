const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
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
  ],
  skills: {
    type: [String],
    required: true
  },
  intrests: {
    type: String,
    required: true
  }
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
