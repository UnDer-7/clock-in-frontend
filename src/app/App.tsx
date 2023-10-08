import {RouterProvider} from "react-router-dom";
import {router} from "./routes.tsx";
import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import useCustomTheme from "./hooks/useCustomTheme.ts";
import {useAuth} from "react-oidc-context";

export default function App() {
    const theme = useCustomTheme();
    const auth = useAuth();

    console.log('AUTH isAuthenticated', auth.isAuthenticated)

    if (auth.isLoading) {
        return <div>Loading...</div>;
    }


    console.log('AUTH isLoading', auth.isLoading)
    console.log('AUTH token', auth.user?.access_token)
    console.log('AUTH expires_in seconds', auth.user?.expires_in)
    console.log('AUTH expires_at', new Date(auth.user?.expires_at * 1000))
    console.log('AUTH refresh_token', auth.user?.refresh_token)

    if (!auth.isAuthenticated) {
        console.log('user not authenticated')
       return  <button onClick={() => void auth.signinRedirect()}>Log in</button>;
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="lg">
                <CssBaseline/>
                <RouterProvider router={router}/>
            </Container>
        </ThemeProvider>
    )
}
