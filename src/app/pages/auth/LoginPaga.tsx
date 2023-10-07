import {ReactElement} from "react";
import useAuthentication from "../../hooks/useAuthentication.ts";
import {Navigate, useLocation} from "react-router-dom";
import {PATH_HOME_PAGE} from "../home/HomePage.tsx";
import {Avatar, Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export const PATH_LOGIN_PAGE = "/auth/login";

export default function LoginPage(): ReactElement {
    const isAuthenticated = useAuthentication();
    const location = useLocation();

    if (isAuthenticated) {
        console.log('user is already authenticated');

        return <Navigate to={PATH_HOME_PAGE} state={{ from: location }} replace />;
    }

    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Login
            </Typography>
            <Box component="form" onSubmit={() => {console.log('submit')}} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                            Forgot password?
                    </Grid>
                    <Grid item>
                            {"Don't have an account? Sign Up"}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}