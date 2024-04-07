const { default: mongoose } = require("mongoose");
const { Schema } = mongoose;

const views = new Schema(
  {
    viewer_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Views", views);