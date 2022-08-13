var express = require("express");
var router = express.Router();
const id = require("../models/id");
const number = require("../models/number");

//PEGAR NUMERO E ID DO BARBEIRO
router.get("/register", async function (req, res) {
  const { id, number } = req.body;
  const user = new User({ id, number });

  try {
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error registering new user please try again." });
  }
});

//ATUALIZAR NUMERO DO BARBEIRO
router.put("/", async function (req, res) {
  const { id } = req.body;

  try {
    var user = await User.findOneAndUpdate(
      { _id: req.id },
      { $set: { name: number } },
      { upsert: true, new: true }
    );
    res.json(user);
  } catch (error) {
    res.status(401).json({ error: error });
  }
});
