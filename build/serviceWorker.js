if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(() => {
                return navigator.serviceWorker.ready;
            })
            .then((reg) => {
                console.log('Service Worker is registered', reg);
            })
            .catch(err => console.log(`Service Worker failed to register: ${err}`));
    });
}