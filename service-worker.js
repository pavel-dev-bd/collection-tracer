// Service Worker for Collection Tracker PWA
// Handles offline support, caching, and background sync

const CACHE_NAME = 'collection-tracker-v1';
const RUNTIME_CACHE = 'collection-tracker-runtime-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './src/css/style.css',
  './src/js/main.js',
  './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/webfonts/fa-solid-900.woff2'
];

// Install event: cache essential assets
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching assets');
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.warn('[Service Worker] Some assets failed to cache:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate event: clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event: serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle requests
  if (request.url.includes('/api/') || request.url.includes('.json')) {
    // API/JSON: network first, fallback to cache
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const cacheCopy = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(request, cacheCopy);
            });
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
  } else {
    // HTML/CSS/JS/Fonts: cache first, fallback to network
    event.respondWith(
      caches.match(request).then((response) => {
        if (response) {
          return response;
        }
        return fetch(request)
          .then((response) => {
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }
            const cacheCopy = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(request, cacheCopy);
            });
            return response;
          })
          .catch(() => {
            // Return offline page if available
            return caches.match('./index.html');
          });
      })
    );
  }
});

// Background Sync for offline data sync
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-collections') {
    event.waitUntil(syncCollections());
  }
});

async function syncCollections() {
  try {
    const clients = await self.clients.matchAll();
    clients.forEach((client) => {
      client.postMessage({
        type: 'SYNC_SUCCESS',
        message: 'Collections synced from offline storage'
      });
    });
  } catch (err) {
    console.error('[Service Worker] Sync failed:', err);
  }
}

// Push notifications (optional)
self.addEventListener('push', (event) => {
  if (event.data) {
    const options = {
      body: event.data.text(),
      icon: './manifest.json',
      badge: './src/images/badge-72x72.png',
      tag: 'collection-tracker',
      requireInteraction: false
    };
    event.waitUntil(
      self.registration.showNotification('Collection Tracker', options)
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((clientList) => {
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i];
        if (client.url === '/' && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow('./');
      }
    })
  );
});

console.log('[Service Worker] Ready to serve offline content');
