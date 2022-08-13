const { send } = require('process')
const { create } = require('venom-bot')
const { Whatsapp } = require('venom-bot')
const venom = require('venom-bot')

venom
  .create({
    session: 'Test',
    multidevice: true
  })
  .then(client => start(client))
  .catch(erro => {
    console.log(erro)
  })

function start(client) {
  client.onMessage(message => {
    if (message.body === 'Boa noite') {
      client
        .sendText(message.from, 'Comando testado')
        .then(result => {
          console.log('Result: ', result) //return object success
        })
        .catch(erro => {
          console.error('Error when sending: ', erro) //return object error
        })
    }
  })
}
