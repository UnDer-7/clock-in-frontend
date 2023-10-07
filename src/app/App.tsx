import { RouterProvider } from "react-router-dom";
import {router} from "./routes.tsx";
import {CssBaseline} from "@mui/material";


export default function App() {
    return (
        <>
            <CssBaseline />
            <RouterProvider router={router}/>
        </>
    )
}
