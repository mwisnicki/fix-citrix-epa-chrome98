chrome.runtime.onInstalled.addListener(() => {
    console.log("Started EPA fix");

    const filter = {
        urls: ["*://localhost/*"]
    };
    const opt_extraInfoSpec = ["blocking", "extraHeaders"];

    function onBeforeRequest(detail) {
        if (detail.method === "OPTIONS") {
            console.log("BLOCKING %s", detail.url, detail);
            return { cancel: true };
        }
        console.log("not blocking %s", detail.url, detail);
    }

    chrome.webRequest.onBeforeRequest.addListener(onBeforeRequest, filter, opt_extraInfoSpec);
});