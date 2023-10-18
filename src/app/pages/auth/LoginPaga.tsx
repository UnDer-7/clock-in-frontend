import {ReactElement} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {PATH_HOME_PAGE} from "../home/HomePage.tsx";
import {Button, Stack} from "@mui/material";
import {useAuth} from "react-oidc-context";

export const PATH_LOGIN_PAGE = "/auth/login";

export default function LoginPage(): ReactElement {
    const auth = useAuth();
    const location = useLocation();

    if (auth.isAuthenticated) {
        console.log('user is already authenticated');

        return <Navigate to={PATH_HOME_PAGE} state={{from: location}} replace/>;
    }

    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{width: 1, height: "100vh"}}
        >
            <Button
                type="submit"
                variant="contained"
                sx={{mt: 3, mb: 2}}
                onClick={() => void auth.signinRedirect()}
            >
                {/*ToDo pegar de uma env*/}
                Access Clock In
            </Button>
        </Stack>
    )
}