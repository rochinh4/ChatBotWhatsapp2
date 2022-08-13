var express = require("express");
var router = express.Router();
const hi = require("../models/messagehi");
const agendamento = require("../models/messageagendamento");
const lembrete = require("../models/messagelembrete");
const id = require("../models/id");
const number = require("../models/number");

//ATUALIZAR MENSAGEM DE INICIO
router.put("/messages/att/hi", async (req, res) => {
  const { body } = req.body;
  const { id } = req.params;

  try {
    let note = await hi.findById(id);
    if (isOwner(req.user, note)) {
      note = await hi.findOneAndUpdate(
        { _id: id },
        { $set: { body: body } },
        { upsert: true, new: true }
      );

      res.json(note);
    } else res.status(403).json({ error: "Permission denied" });
  } catch (error) {
    res.status(500).json({ error: "Problem to update a note" });
  }
});
//ATUALIZAR MENSAGEM DE AGENDAMENTO
router.put("/messages/att/agendamento", async (req, res) => {
  const { body } = req.body;
  const { id } = req.params;

  try {
    let note = await agendamento.findById(id);
    if (isOwner(req.user, note)) {
      note = await agendamento.findOneAndUpdate(
        { _id: id },
        { $set: { body: body } },
        { upsert: true, new: true }
      );

      res.json(note);
    } else res.status(403).json({ error: "Permission denied" });
  } catch (error) {
    res.status(500).json({ error: "Problem to update a note" });
  }
});
//ATUALIZAR MENSAGEM DE LEMBRETE
router.put("/messages/att/lembrete", async (req, res) => {
  const { body } = req.body;
  const { id } = req.params;

  try {
    let note = await lembrete.findById(id);
    if (isOwner(req.user, note)) {
      note = await lembrete.findOneAndUpdate(
        { _id: id },
        { $set: { body: body } },
        { upsert: true, new: true }
      );

      res.json(note);
    } else res.status(403).json({ error: "Permission denied" });
  } catch (error) {
    res.status(500).json({ error: "Problem to update a note" });
  }
});
//RECEBER A MENSAGEM DE INICIO
router.get("/messages/hi", async (req, res) => {
  try {
    const { id } = req.params;
    let note = await hi.findById(id);
    if (isOwner(req.user, note)) res.json(note);
    else res.status(403).json({ error: "Permission denied" });
  } catch (error) {
    res.status(500).json({ error: "Problem to get a note" });
  }
});
//RECEBER A MENSAGEM DE AGENDAMENTO
router.get("/messages/agendamento", async (req, res) => {
  try {
    const { id } = req.params;
    let note = await agendamento.findById(id);
    if (isOwner(req.user, note)) res.json(note);
    else res.status(403).json({ error: "Permission denied" });
  } catch (error) {
    res.status(500).json({ error: "Problem to get a note" });
  }
});
//RECEBER A MENSAGEM DE LEMBRETE
router.get("/messages/lembrete", async (req, res) => {
  try {
    const { id } = req.params;
    let note = await lembrete.findById(id);
    if (isOwner(req.user, note)) res.json(note);
    else res.status(403).json({ error: "Permission denied" });
  } catch (error) {
    res.status(500).json({ error: "Problem to get a note" });
  }
});
