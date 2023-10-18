import {createBrowserRouter, Navigate} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import HomePage, {PATH_HOME_PAGE} from "./pages/home/HomePage.tsx";
import LoginPage, {PATH_LOGIN_PAGE} from "./pages/auth/LoginPaga.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to={PATH_HOME_PAGE} replace />
    },
    {
        path: PATH_HOME_PAGE,
        element: <ProtectedRoute component={<HomePage />} />,
        errorElement: <ErrorPage />
    },
    {
        path: PATH_LOGIN_PAGE,
        element: <LoginPage />
    }
]);