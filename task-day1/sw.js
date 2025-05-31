self.addEventListener('instull',(event)=>{
  console.log("sw installed!");
  // self.skipWaiting();
  event.waitUntil(caches.open('myapp').then((cache) =>{
        cache.addAll([
          'to-do.html',
          'to-do.js',
          'tablejs.html',
          'tablejs.js'
        ])}
      )
  );
  });

self.addEventListener("activate", (event) => {
  console.log("sw Activated!");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request.url).then((file) => {
      if (file) {
        console.log(file);
        console.log("inside if statment");
        return file;
      } else {
        console.log("network request");
        return fetch(event.request.url);
      }
    })
  );
});

