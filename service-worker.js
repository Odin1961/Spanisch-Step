const CACHE="espanol-step-2.1.2";
const CORE=[
  "./","./index.html","./style.css","./manifest.webmanifest",
  "./icon-180.png","./icon-512.png","./content.js",
  "./spanish-grammar-data.js",
  "./grammar-es-0.2.js",
  "./grammar-es-0.3.js",
  "./grammar-es-0.4.js",
  "./grammar-es-0.5.js",
  "./grammar-es-0.6.js",
  "./grammar-es-0.7.js",
  "./grammar-es-0.8.js",
  "./grammar-es-0.9.js",
  "./grammar-es-1.0.js",
  "./dialogues-quality-es-1.0.js",
  "./dialogues-branching-es-1.0.js",
  "./vocabulary-es-1.0.js",
  "./dialogues-quality-es-0.9.js",
  "./dialogues-branching-es-0.9.js",
  "./vocabulary-es-0.9.js",
  "./dialogues-quality-es-0.8.js",
  "./dialogues-branching-es-0.8.js",
  "./vocabulary-es-0.8.js",
  "./dialogues-quality-es-0.7.js",
  "./dialogues-branching-es-0.7.js",
  "./vocabulary-es-0.7.js",
  "./dialogues-quality-es-0.6.js",
  "./dialogues-branching-es-0.6.js",
  "./vocabulary-es-0.6.js",
  "./dialogues-quality-es-0.5.js",
  "./dialogues-branching-es-0.5.js",
  "./vocabulary-es-0.5.js",
  "./dialogues-quality-es-0.4.js",
  "./dialogues-branching-es-0.4.js",
  "./vocabulary-es-0.4.js",
  "./dialogues-quality-es-0.3.js",
  "./dialogues-branching-es-0.3.js",
  "./vocabulary-es-0.3.js",
  "./dialogues-quality-es-0.2.js",
  "./dialogues-branching-es-0.2.js",
  "./vocabulary-es-0.2.js","./vocabulary.js","./coach.js",
  "./grammar.js","./grammar-error-tracker.js",
  "./grammar-coach-1.6.4.js","./pronunciation.js",
  "./stability.js",
  "./polish.js",
  "./update-manager.js",
  "./runtime-health.js",
  "./app.js"
];
self.addEventListener("install",event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)));
});
self.addEventListener("activate",event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(
    keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))
  )).then(()=>self.clients.claim()));
});
self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET")return;

  event.respondWith((async()=>{
    const cached=await caches.match(event.request);

    try{
      const response=await fetch(event.request);

      if(response && response.ok){
        const cache=await caches.open(CACHE);
        cache.put(event.request,response.clone()).catch(()=>{});
      }

      return response;
    }catch{
      if(cached)return cached;

      if(event.request.mode==="navigate"){
        return caches.match("./index.html");
      }

      return new Response(
        "Offline und nicht im Cache verfügbar.",
        {status:503,statusText:"Offline"}
      );
    }
  })());
});
