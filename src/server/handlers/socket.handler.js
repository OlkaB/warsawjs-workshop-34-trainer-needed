
const { registerClient, deleteClient, broadcastMessage } = require('../Services/client-manager')

module.exports = (socket) => {
    const payload = { obiad: '13:15' }
    socket.send(JSON.stringify(payload))
    registerClient(socket)

    // handshake with server
    socket.on('open', () => {
        console.log("TCL: open")
    })

    socket.on('message', (payload) => {
        console.log("TCL: message")
        try {
            const data = JSON.parse(payload)
            console.log("Message from client: ", JSON.parse(payload))
            broadcastMessage(socket, payload)
        } catch (err) {
            console.error("Message from client error: ", err)
        }
    })

    socket.on('close', () => {
        console.log("TCL: close")
        deleteClient(socket)
    })

    socket.on('error', () => {
        console.log("TCL: error")
        deleteClient(socket)
    })
}