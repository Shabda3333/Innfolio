const mongoose = require("mongoose");
const project = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: [true, "Your role is required"],
  },
  introduction: {
    type: String,
    required: [true, "Your starting date is required"],
  },
  role: {
    type: String,
    required: [true, "Your end date is required"],
  },
  skills: {
    type: String,
    required: [true, "Your company is required"],
  },
  summary: {
    type: String,
    required: [true, "Your address is required"],
  },
  link: {
    type: String,
  },
  photos: {
    type: [String],
  },
  thumbnail: {
    type: String,
    required: [true, "Your thumnail is required"],
  },
},
{ timestamps: true }
);
module.exports = mongoose.model("Project", project);