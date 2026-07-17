const CACHE_NAME = 'monoxerx-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// インストール処理
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// リクエストフェッチ処理
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
