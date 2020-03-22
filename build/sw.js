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

workbox.precaching.precacheAndRoute([{"revision":"9f42d8e100f579eeeb5053b4907d77f8","url":"css/main.css"},{"revision":"34446ca2e0ba0036797856879bc2456a","url":"index.html"},{"revision":"1557a45c5087907caae7aec7b261364d","url":"js/app.js"},{"revision":"2e74451a0df59153617071c64650d65b","url":"workbox-90f468eb.js"}]);