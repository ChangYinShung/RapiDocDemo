varabp = abp || {}; (function () {
    window.addEventListener('DOMContentLoaded', (event) => {
        varexcludeUrl = ["swagger.json", "connect/token"]varfirstRequest = true;/*
          Ensure that the DOM is loaded, then add the event listener.
          here we are listenig to 'before-try' event which fires when the user clicks
          on TRY, it then modifies the POST requests by adding a custom header
        */constrapidocEl = document.getElementById('thedoc'); rapidocEl.addEventListener('before-try', async (e) => { varrequest = e.detail.request; if (request.url.includes(excludeUrl[1])) { firstRequest = true; } if (firstRequest && !excludeUrl.some(url => request.url.includes(url))) { awaitfetch(`${abp.appPath}abp/Swashbuckle/SetCsrfCookie`, { headers: request.headers }); firstRequest = false; } varantiForgeryToken = abp.security.antiForgery.getToken(); if (antiForgeryToken) { request.headers.append(abp.security.antiForgery.tokenHeaderName, antiForgeryToken); } });
    });
})();