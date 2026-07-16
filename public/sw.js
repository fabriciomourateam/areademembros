// Service Worker — FM Team (Área de Membros)
// Estratégia: network-first para navegação (HTML) para NUNCA servir uma
// versão antiga em cache após um novo deploy (causa da "tela branca").
// Bump a versão para invalidar caches antigos automaticamente.
const CACHE_NAME = 'fm-team-v3';

// Instala já assumindo o controle (sem esperar abas antigas fecharem).
self.addEventListener('install', () => {
  self.skipWaiting();
});

// Ao ativar, apaga QUALQUER cache antigo (inclusive os quebrados de versões
// anteriores que apontavam para /static/js/bundle.js) e assume o controle.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((names) => Promise.all(names.map((name) => caches.delete(name))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Só tratamos GET; POST/PUT etc. seguem direto para a rede.
  if (request.method !== 'GET') return;

  // Navegação (documentos HTML): sempre buscar na rede primeiro.
  // Assim, um novo deploy é carregado imediatamente. Só cai no cache
  // se estiver offline.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put('/', copy));
          return response;
        })
        .catch(() => caches.match('/'))
    );
    return;
  }

  // Demais requisições (assets com hash no nome, imagens): stale-while-revalidate.
  // Como os nomes têm hash, o cache nunca fica "velho" de forma perigosa.
  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (response && response.status === 200 && response.type === 'basic') {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
