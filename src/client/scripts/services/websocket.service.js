(function (root) {
    // to make it available from another files
    let socket = null

    function sendMessage(payload) {
        socket.send(JSON.stringify(payload))
    }

    function setupWebsocket () {

        socket = new WebSocket(root.app.config.url);

        // communication with server is opened
        socket.addEventListener('open', () => {
            console.log("TCL: main -> open", open)

            const payload = { action: 'alarm' }
            socket.send(JSON.stringify(payload))
        })

        socket.addEventListener('message', (payload) => {
            console.log("TCL: main -> message", open)
            console.log("Message from server: ", {
                payload,
                payload_data: JSON.parse(payload.data),
                condition: Object.keys(JSON.parse(payload.data))
            })
            try {
                if (Object.keys(JSON.parse(payload.data)).includes('alarm')) {
                    document.dispatchEvent(new CustomEvent('alarm'))
                }
            } catch (err) {
                console.log("message receiving error ", error)
            }
        })

        socket.addEventListener('close', () => {
            console.log("TCL: main -> close", open)
        })

        socket.addEventListener('error', () => {
            console.log("TCL: main -> error", open)
        })
    }

    // add sendMessage function to global scope to make it available outside of the IIFE. Socket już został przekazany powyżej, dlatego wystarczy funkcję wyeksportować
    Object.assign(root.app, { sendMessage, setupWebsocket })

})(window);