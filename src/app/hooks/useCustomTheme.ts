import React from "react";
import {createTheme, Theme, useMediaQuery} from "@mui/material";
import {red} from "@mui/material/colors";

export default function useCustomTheme(): Theme {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    return React.useMemo(() => createTheme({
            palette: {
                mode: prefersDarkMode ? 'dark' : 'light',
                primary: {
                    main: '#556cd6',
                },
                secondary: {
                    main: '#19857b',
                },
                error: {
                    main: red.A400,
                },
            },
        }),
        [prefersDarkMode]);
}