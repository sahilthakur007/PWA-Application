export default async () => {
    const url = `${process.env.PUBLIC_URL}/sw.js`

    function urlBase64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');

        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }
    
    function determineAppServerKey() {
        const vapidPublicKey =
            "BOTrk8ygedC4xReI_W4zausOX9Up8RwiVH_l4QXq042w9duXfJdGJGOqSO0V1AyI-T-zICujC3MEFpmI_gvfOeg";
        return urlBase64ToUint8Array(vapidPublicKey);
    }

    


    try {
        let res = await navigator.serviceWorker.register(url)
        console.log(res)
        return res.pushManager.getSubscription()
            .then(function (subscription) {
                res.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: determineAppServerKey()
                })
            })
    }
    catch (e)
    {
        console.log(`error ${e}`)
    }
 }