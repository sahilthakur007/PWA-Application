let cacheData = "appV1"
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                "/",
                "/index.html",
                "/static/js/0.chunk.js",
                "/static/js/main.chunk.js",
                "/static/js/bundle.js",
                "/users"
            ])
        })
    )
})

this.addEventListener("fetch", (event) => {
    
    event.waitUntil(
        this.registration.showNotification("Internet", {
            body: "internet not working",
        })
    )
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((result) => {
                if (result) {
                    return result
                }
            })
        )
    }

})

this.addEventListener("get", (event) => {

    // if (event.request.url === "http://localhost:3000/static/js/main.chunk.js") {
    console.log(event.reqfuest.url)
        event.waitUntil(
            this.registration.showNotification("Internet", {
                body: "internet not working",
            })
        )
    // }
    if (!navigator.onLine) {
        
        event.respondWith(
            caches.match(event.request).then((result) => {
                if (result) {
                    return result
                }
                let requestUrl = event.request.clone();
                return fetch
            })
        )
    }

})