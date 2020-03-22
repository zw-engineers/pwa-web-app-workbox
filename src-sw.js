importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

workbox.routing.registerRoute(
	new RegExp('https://jsonplaceholder.typicode.com/users'),
	new workbox.strategies.NetworkFirst()
);

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
	/^https:\/\/fonts\.gstatic\.com/,
	new workbox.strategies.NetworkFirst({
		cacheName: 'google-fonts-webfonts'
	})
);

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);