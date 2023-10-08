import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './app/App.tsx'
import {AuthProvider, AuthProviderProps} from "react-oidc-context";

const oidcConfig: AuthProviderProps = {
    authority: "http://192.168.1.158:8081/realms/gorilla_roxo",
    client_id: "clock-in-frontend",
    redirect_uri: "http://192.168.1.158:5173",
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <AuthProvider {...oidcConfig} >
          <App />
      </AuthProvider>
  </React.StrictMode>,
)
