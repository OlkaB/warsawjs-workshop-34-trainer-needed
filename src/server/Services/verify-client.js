const hostWhitelist = require('../config/host-whitelist')
const debug = require('debug')

const console = {
    log: debug('verify-client:log')
}

function verifyClient(client) {
    // do some logic here and return true if join client, or false - if reject
    const status = hostWhitelist.includes(client.origin)
    console.log(`status ${status}, client host ${client.host}, origin ${client.origin} `)
    return status
}

module.exports = {
    verifyClient
}