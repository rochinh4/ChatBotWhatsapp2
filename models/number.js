const mongoose = require("mongoose");

var numberSchema = new mongoose.Schema({
  number: { type: String, required: true, unique: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model("number", numberSchema);
