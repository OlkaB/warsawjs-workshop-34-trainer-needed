// paczka do utworzenia serwera
const ws = require('ws')
const process = require('process') // nie trzeba go requirować, bo jest zmienną globalną. Ale jeśli go nadpisujemy, to lepiej go przypisać do zmiennej
const setupServerHandler = require('../handlers/server.handler')
const { verifyClient } = require('../Services/verify-client')

module.exports = () => {
    const port = Number(process.env.PORT) //wszystko z env'a idzie stringiem i konwertujemy (best practice) na number
    const settings = { port, verifyClient };
    const server = new ws.Server(settings);

    // dependency injection - as we import function we pass arguments, that will be meeded
    setupServerHandler(server)
}