(function (root) {
const app = {
    config: {
        url: 'ws://localhost:3000' //websocket starts with ws instead of http
    }
}

// dodajemy obiekt app do globala
Object.assign(root, {app})

})(window);