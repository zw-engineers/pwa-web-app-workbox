if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/sw.js')
            .then(() => navigator.serviceWorker.ready)
            .then((registration) => console.log('Service Worker is registered', registration))
            .catch(err => console.log(`Service Worker failed to register: ${err}`));
    });
}