const setupSocketHandler =  require('./socket.handler');

module.exports = (server) => {

    // listening event - socket created
    server.on('listening', () => {
        console.log('listening')
    })

    // handshake event
    server.on('headers', () => {
        console.log('headers')
    })

    // when handshake is complete connection event happens (server returns ok status: 101)
    server.on('connection', (socket, client) => {
        // console.log('connection', { socket, client });

        // dependency injection - as we import function we pass arguments, that will be needed
        setupSocketHandler(socket)
    })

    // server returns error
    server.on('error', () => {
        console.log('error')
    })
}