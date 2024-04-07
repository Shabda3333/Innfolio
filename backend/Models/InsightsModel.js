const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const insights = new mongoose.Schema({
  likes_id: {
    type: Schema.Types.ObjectId,
    ref: "Likes",
  },
  views_id: {
    type: Schema.Types.ObjectId,
    ref: "Views",
  }, 
},
{ timestamps: true }
);
module.exports = mongoose.model("Insights", insights);