function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + value + ";expires=" + expires.toUTCString() + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + "=; Max-Age=-99999999;";
}

function checkCookieConsent() {
    const cookieConsent = getCookie('cookie-consent');
    if (!cookieConsent) {
        document.getElementById('cookie-consent').style.display = 'flex';
    }
}

document.getElementById('accept-cookies').addEventListener('click', function() {
    setCookie('cookie-consent', 'accepted', 30); 
    document.getElementById('cookie-consent').style.display = 'none';
});

setTimeout(checkCookieConsent, 3000); // Exibe a janela de cookies após 3 segundos
