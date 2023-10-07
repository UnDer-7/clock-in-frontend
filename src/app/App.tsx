import {RouterProvider} from "react-router-dom";
import {router} from "./routes.tsx";
import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import useCustomTheme from "./hooks/useCustomTheme.ts";


export default function App() {
    const theme = useCustomTheme();

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="lg">
                <CssBaseline/>
                <RouterProvider router={router}/>
            </Container>
        </ThemeProvider>
    )
}
