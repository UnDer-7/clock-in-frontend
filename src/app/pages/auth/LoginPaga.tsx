import {ReactElement} from "react";
import useAuthentication from "../../hooks/authenticationHook.ts";
import {Navigate, useLocation} from "react-router-dom";
import {PATH_HOME_PAGE} from "../home/HomePage.tsx";

export const PATH_LOGIN_PAGE = "/auth/login";

export default function LoginPage(): ReactElement {
    const isAuthenticated = useAuthentication();
    const location = useLocation();

    if (isAuthenticated) {
        console.log('user is already authenticated');

        return <Navigate to={PATH_HOME_PAGE} state={{ from: location }} replace />;
    }

    return (
        <h1>Login Page</h1>
    )
}