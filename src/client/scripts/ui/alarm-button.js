(function (root) {
    function setupUI(){
        const bttn = document.querySelector('.alarm-button')
        bttn.addEventListener('click', () => {
            console.log("Alarm button UI")
            root.app.sendMessage({ alarm: 'Participant X needs help' })
        })
    }

    // add setupUI to global
    Object.assign(root.app, {setupUI})
})(window);
