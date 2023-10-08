import Keycloak from 'keycloak-js';

export function useKeycloak() {
    const kc = new Keycloak({
            url: 'http://192.168.1.158:8081',
            realm: 'gorilla_roxo',
            clientId: 'clock-in-frontend',
            // onLoad: 'check-sso', // check-sso | login-required
            // KeycloakResponseType: 'code',
        }
    );

    console.log('Initing Keycloak')
    kc.init({
        onLoad: 'login-required',
        silentCheckSsoRedirectUri: window.location.origin + "/silent-check-ssh.html",
        checkLoginIframe: false,
        pkceMethod: 'S256',
        redirectUri: 'http://192.168.1.158:5173',
        // @ts-expect-error maybe is required
        KeycloakResponseType: 'code',
    }).then(auth => {
        if (!auth) {
            console.log('not authenticated: ', auth)
            // window.location.reload();
        } else {
            console.info("Authenticated");
            console.log('auth', auth)
            console.log('Keycloak', kc)
            kc.onTokenExpired = () => {
                console.log('token expired')
            }
        }
    }).catch(err => {
        console.error("Authentication failed", err);
    })
}