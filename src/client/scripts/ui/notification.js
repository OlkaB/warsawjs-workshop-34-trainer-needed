(function (root) {
    function setupUI(){
        document.addEventListener('alarm', () => {
            document.querySelector('.notification').classList.remove('hidden')
        })
    }
    Object.assign(root.app, {setupUI})
})(window);
