const path = require('path')
const dotenv = require('dotenv')

module.exports = () => {
    dotenv.config({
        path: path.join(__dirname, '..', 'config', 'app.env') //'config -to nazwa foolderu, app.env - pliku
    })
}