import { ReactNode} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {PATH_LOGIN_PAGE} from "../pages/auth/LoginPaga.tsx";
import {useAuth} from "react-oidc-context";

export default function ProtectedRoute({ component }: { component: ReactNode}): ReactNode {
    const auth = useAuth();
    const location = useLocation();

    if (auth.isAuthenticated) {
        return component
    }

    console.log('user not authenticated')
    return <Navigate to={PATH_LOGIN_PAGE} state={{ from: location }} replace />
}