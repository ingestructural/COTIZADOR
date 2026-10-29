/* Service worker — Cotizador ING. Página: primero la red (así llegan las versiones nuevas) y, sin conexión, la copia guardada.
   Datos (Supabase, UF): siempre por la red, nunca en caché. */
const CACHE = 'cotizador-20261029-2130';
const CORE = ['./', './index.html', './manifest.webmanifest', './logo-ing.png', './cot-192.png', './cot-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const u = new URL(r.url); if (u.origin !== location.origin) return;   // API y servicios externos: directo a la red
  e.respondWith(fetch(r, {cache: 'no-store'}).then(res => { if (res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); } return res; })
    .catch(() => caches.match(r).then(m => m || caches.match('./index.html'))));
});
