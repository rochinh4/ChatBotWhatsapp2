const { send } = require("process");
const { create } = require("venom-bot");
const { Whatsapp } = require("venom-bot");
const venom = require("venom-bot");
const hi = require("../models/messagehi");
const agendamento = require("../models/messageagendamento");
const lembrete = require("../models/messagelembrete");
const id = require("../models/id");
const number = require("../models/number");
const { appendFile } = require("fs");
require("../config/database");

venom
  .create({
    session: "Test",
    multidevice: true,
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body === "Hi") {
      client
        .sendText(message.from, "test")
        .then((result) => {
          console.log("Result: ", result); //return object success
        })
        .catch((erro) => {
          console.error("Error when sending: ", erro); //return object error
        });
    }
  });
}
