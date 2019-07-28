(function (root) {

    function main() {
        root.app.setupWebsocket()

        // launch page specific socket functions (ie sending data on button click or receiving notifications)
        root.app.setupUI()
    }

    root.addEventListener('DOMContentLoaded', main)
}(window));
