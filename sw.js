// Collective service worker · lets the Home Screen app open instantly and survive a bad signal.
// Network first, cache fallback. Nothing from Supabase is ever cached.
const CACHE = "collective-shell-v1";
self.addEventListener("install", e => { self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  if (url.hostname.endsWith("supabase.co") || url.hostname.endsWith("anthropic.com")) return;
  e.respondWith(
    fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {}); return r; })
      .catch(() => caches.match(e.request).then(m => m || (e.request.mode === "navigate" ? caches.match("./index.html") : undefined)))
  );
});
