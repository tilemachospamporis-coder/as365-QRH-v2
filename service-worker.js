const CACHE = 'as365-qrh-images-v1';
const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./data.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./images/warning-system-general.jpeg",
  "./images/engine-fire.jpeg",
  "./images/cargo-bay-fire.jpeg",
  "./images/smoke-in-cabin.jpeg",
  "./images/engine-failure-cruise.jpeg",
  "./images/minor-governor-failure.jpeg",
  "./images/ng-indication-error.jpeg",
  "./images/torque-indication-error.jpeg",
  "./images/engine-oil-pressure.jpeg",
  "./images/engine-oil-temperature.jpeg",
  "./images/rpm-365.jpeg",
  "./images/mgb-oil-pressure.jpeg",
  "./images/mgb-oil-temperature.jpeg",
  "./images/hydraulic-level-system-2.jpeg",
  "./images/high-hydraulic-pressure.jpeg",
  "./images/lg-retraction-failure.jpeg",
  "./images/lg-extension-failure.jpeg",
  "./images/total-generator-failure.jpeg",
  "./images/battery-contactor-failure.jpeg",
  "./images/battery-short-circuit.jpeg",
  "./images/tail-rotor-failure.jpeg"
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request)));
});
