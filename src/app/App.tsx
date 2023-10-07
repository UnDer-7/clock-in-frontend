import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Root from "./routes/root.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import HomePage from "./pages/HomePage.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />
    },
    {
        path: "home/:userId",
        element: <HomePage />
    }
]);

export default function App() {
  return (
      <RouterProvider router={router} />
  )
}
