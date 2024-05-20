const mongoose = require("mongoose");
const { Schema } = mongoose;

const project = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: [true, "Your title is required"],
  },
  introduction: {
    type: String,
    required: [true, "Your introduction is required"],
  },
  role: {
    type: String,
    required: [true, "Your role is required"],
  },
  skills: {
    type: String,
    required: [true, "Your skills is required"],
  },
  summary: {
    type: String,
    required: [true, "Your summary is required"],
  },
  link: {
    type: String,
  },
  photos: {
    type: [String],
    // required: [true, "Your photos is required"],
  },
  thumbnail: {
    type: String,
    required: [true, "Your thumnail is required"],
  },
},
{ timestamps: true }
);
module.exports = mongoose.model("Project", project);