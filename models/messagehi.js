const mongoose = require("mongoose");

var hiSchema = new mongoose.Schema({
  body: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "id",
    required: true,
  },
});
module.exports = mongoose.model("hi", hiSchema);
