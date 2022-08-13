const mongoose = require("mongoose");

var lembreteSchema = new mongoose.Schema({
  body: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "id",
    required: true,
  },
});
module.exports = mongoose.model("lembrete", lembreteSchema);
