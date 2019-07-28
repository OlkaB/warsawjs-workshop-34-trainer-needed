const debug = require('debug')

const console = {
    log: debug('client-manager:log'),
    info: debug('client-manager:info')
}

// przechowujemy obecnie podłączonych klientów

const clients = []

function registerClient(client) {
    console.log('registerClient')
    clients.push(client)
}

function deleteClient(client) {
    console.log('deleteClient')
    const index = clients.indexOf(client)

    if(index === -1) {
        return
    }

    clients.splice(index, 1)
}

function broadcastMessage(messagingClient, message,) {
    clients.forEach(client => {
        if (messagingClient !== client) {
            client.send(message)
        }
    })
}

module.exports = {
    registerClient,
    deleteClient,
    broadcastMessage
}
