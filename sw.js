const cacheName = 'cache-v1';
const cacheResource = [
    '/',
    '/index.html'    
];


self.addEventListener('install',e=>{
    console.log('sw install');

    e.waitUntil(
        caches.open(cacheName).then( cache=>{
            cache.addAll(cacheResource);
        })
    );
    
});

self.addEventListener('activate',e=>{
    console.log('sw activate');
});

self.addEventListener('fetch',e=>{
    console.log('sw fetch');
});