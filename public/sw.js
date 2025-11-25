const CACHE_NAME = 'fm-team-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/logo.png',
  '/manifest.json'
];

// Instalar Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptar requisições
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // NÃO interceptar requisições do Supabase (sempre buscar na rede)
  if (url.hostname.includes('supabase.co')) {
    return fetch(event.request);
  }
  
  // NÃO interceptar requisições de API externas
  if (url.hostname.includes('n8n.') || url.hostname.includes('webhook')) {
    return fetch(event.request);
  }
  
  // Para outros recursos, usar cache
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Retorna do cache se disponível, senão busca na rede
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Atualizar Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});