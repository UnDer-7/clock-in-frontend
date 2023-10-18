import {RouterProvider} from "react-router-dom";
import {router} from "./routes.tsx";
import {CircularProgress, Container, CssBaseline, Stack, ThemeProvider} from "@mui/material";
import useCustomTheme from "./hooks/useCustomTheme.ts";
import {useAuth} from "react-oidc-context";
import {ReactElement} from "react";

function AuthLoading(): ReactElement {
    const auth = useAuth();

    if (auth.isLoading) {
        return (
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{width: 1, height: "100vh"}}
            >
                <CircularProgress/>
            </Stack>
        )
    }

    return <RouterProvider router={router}/>;
}

export default function App() {
    const theme = useCustomTheme();

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="lg">
                <CssBaseline/>
                <AuthLoading/>
            </Container>
        </ThemeProvider>
    )
}
