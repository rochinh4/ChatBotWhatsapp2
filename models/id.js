const mongoose = require("mongoose");

var idSchema = new mongoose.Schema({
  body: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model("id", idSchema);
