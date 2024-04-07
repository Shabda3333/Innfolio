const mongoose = require("mongoose");
const work = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  role: {
    type: String,
    required: [true, "Your role is required"],
  },
  dateFrom: {
    type: String,
    required: [true, "Your starting date is required"],
  },
  dateTo: {
    type: String,
    required: [true, "Your end date is required"],
  },
  company: {
    type: String,
    required: [true, "Your company is required"],
  },
  address: {
    type: String,
    required: [true, "Your address is required"],
  },
},
{ timestamps: true }
);
module.exports = mongoose.model("WorkExp", work);