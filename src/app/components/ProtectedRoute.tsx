import { ReactNode} from "react";
import useAuthentication from "../hooks/useAuthentication.ts";
import {Navigate, useLocation} from "react-router-dom";
import {PATH_LOGIN_PAGE} from "../pages/auth/LoginPaga.tsx";

export default function ProtectedRoute({ component }: { component: ReactNode}): ReactNode {
    const isAuthenticated = useAuthentication();
    const location = useLocation();

    if (isAuthenticated) {
        return component
    }

    console.log('user not authenticated')
    return <Navigate to={PATH_LOGIN_PAGE} state={{ from: location }} replace />
}