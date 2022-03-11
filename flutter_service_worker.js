'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "4dc828dbe4c49c30f5a76e999f03be4e",
"index.html": "6805b5e6f5da227f3fd71cdee6e6133e",
"/": "6805b5e6f5da227f3fd71cdee6e6133e",
"version.json": "18db2fbf4cf7f6ba7dee0481f4e0d8b1",
"assets/NOTICES": "8b898d4048d06964c75ec390a9d14c67",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/icons/CopyLink.svg": "260bced1a242457c8b0b78bed3694c6d",
"assets/assets/icons/LIKE_OUTLINED.svg": "846edd14b8bf606323c022d52ae96c66",
"assets/assets/icons/Divider%2520Line%2520Accent.svg": "548e7a75677cb489b5cd9b11ca45e15e",
"assets/assets/icons/DISLIKE_OUTLINED.svg": "8566c4e00cce1b87d127c486f31403e3",
"assets/assets/icons/Copy_Icon.png": "bc1954633171e9159d15b19b6ab178a0",
"assets/assets/icons/SendComment.png": "550aa754e4cb35eca7295fb5f4f403dc",
"assets/assets/icons/COMMUNITY%2520FAVOURITES%2520OUTLINED.svg": "6fe8d600861c0b4f36fb706fc61b98ba",
"assets/assets/icons/BTN_COMMUNITY_SHARE.svg": "7fa11909eabc4322ab5d2ac3816347ba",
"assets/assets/icons/Divider%2520Line%2520Purple.png": "e4059b2c7d27935396d66e5a8b8b3a95",
"assets/assets/icons/Divider%2520Line%2520White.png": "d32f8c71a118623fcebd8b1d7ea396f9",
"assets/assets/icons/Community_Search.svg": "83055f3ca6f1165829372e827c9e1794",
"assets/assets/icons/BTN_COMMUNITY_SEND.svg": "389180fe1574d321549397681015b8c8",
"assets/assets/icons/COMMUNITY_FAVOURITES_BLANK.svg": "6fe8d600861c0b4f36fb706fc61b98ba",
"assets/assets/icons/action.png": "faaa8dc949e00928819da332d7610a3b",
"assets/assets/icons/FAV_OUTLINED.svg": "097cc2ba833987c107ef6f18179e9025",
"assets/assets/icons/Profile.png": "9a47461b11c7b32e218a00083d3ba8a6",
"assets/assets/icons/Timeline_Background.png": "dfcb0782a89fbf64de8806c681f4f6d5",
"assets/assets/icons/FAQs.png": "f006cbba7001fbb8eed9c3ecfbbef026",
"assets/assets/icons/ADD%2520BLOG.svg": "4dcc014dcd44190efd4a577186570ab7",
"assets/assets/icons/FAV_FILLED.svg": "55cc3e68963d44d38b98ac2bb92d80e9",
"assets/assets/icons/COMMUNITY%2520FAVOURITES%2520FILLED.svg": "e18a0482749e3047b6e5821d65df411e",
"assets/assets/icons/ShareBlog.png": "f5044cc24367fbe1d8356aac701a8e37",
"assets/assets/icons/Delete_Share.png": "82d406b9a0e2303da9ca6cb1fc9ecf94",
"assets/assets/icons/COPY.svg": "2cd6ce8d84980f61f5a99b289fb37bfe",
"assets/assets/icons/Offer%2520Pink.png": "7c96394fcf3d1c202b9e4377bf5f2775",
"assets/assets/icons/Divider%2520Line%2520White.svg": "6a5d40d035b6fb0dca168772cf37575b",
"assets/assets/icons/ICO_Hamburger.png": "7c83f081777cd55025db5a7389250069",
"assets/assets/icons/Offer%2520Purple.png": "8865d362fe83a42b7f0049ad6b2ccafc",
"assets/assets/icons/Timeline_Done.png": "f1f9202350be4bad5737f6dba452bfc3",
"assets/assets/images/payment_successful.png": "8713ac53359170c393e26db558b4de98",
"assets/assets/images/Sprint%2520Master%2520-%2520Confirmation.png": "2e18afa5c2e90113c0c96cad08178f68",
"assets/assets/images/Analytics.png": "623a26d2e5072511936e6ce6502faa43",
"assets/assets/images/undraw_Tree_swing_646s%25202.png": "74a475833772770a78b966e1ba4751d3",
"assets/assets/images/Customizable%2520Timeline.png": "606198b09e7888f8303542ea0263c665",
"assets/assets/images/BlogCoverImage.png": "fc5ae3d7815e281a9b77a19f3afea468",
"assets/AssetManifest.json": "3fcb1502c05e34220ab442a148a27478",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"main.dart.js": "a8f8e2c6eb396e841425e6ab12c3f9d3",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
