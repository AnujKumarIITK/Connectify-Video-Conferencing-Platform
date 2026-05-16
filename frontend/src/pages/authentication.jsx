import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Authentication() {

    

    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();
    const [name, setName] = React.useState();
    const [error, setError] = React.useState();
    const [message, setMessage] = React.useState();


    const [formState, setFormState] = React.useState(0);

    const [open, setOpen] = React.useState(false)


    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    let handleAuth = async () => {
        try {
            if (formState === 0) {

                let result = await handleLogin(username, password)


            }
            if (formState === 1) {
                let result = await handleRegister(name, username, password);
                console.log(result);
                setUsername("");
                setMessage(result);
                setOpen(true);
                setError("")
                setFormState(0)
                setPassword("")
            }
        } catch (err) {

            console.log(err);
            let message = (err.response.data.message);
            setError(message);
        }
    }


    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                item
                xs={false}
                sm={5}
                md={7}
                sx={{
                    backgroundImage:
                    "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "100vh",
                }}
                />
                <Grid
                item
                xs={12}
                sm={7}
                md={5}
                component={Paper}
                elevation={10}
                square
                sx={{
                    background:
                    "linear-gradient(180deg, #020617 0%, #071132 100%)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "100vh",
                    px: 4,
                }}
                >
                    <Box
                    sx={{
                        my: 6,
                        mx: 5,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                    }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "#2563eb", width: 60, height: 60, boxShadow: "0 4px 20px rgba(37,99,235,0.5)", }} >
                            <LockOutlinedIcon />
                        </Avatar>

                        <Typography
                        component="h1"
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            mb: 5,
                            mt: 1,
                            color: "white",
                        }}
                        >
                        ApnaVideoCall
                        </Typography>


                        <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            mb: 2,
                            mt: 1,
                            width: "100%",
                        }}
                        >
                        <Button
                            fullWidth
                            variant={formState === 0 ? "contained" : "outlined"}
                            onClick={() => {
                            setFormState(0);
                            }}
                            sx={{
                            borderRadius: "10px",
                            py: 1.2,
                            fontWeight: "bold",
                            background:
                                formState === 0 ? "#2563eb" : "transparent",
                            borderColor: "#2563eb",
                            color: "white",
                            }}
                        >
                            Sign In
                        </Button>

                        <Button
                            fullWidth
                            variant={formState === 1 ? "contained" : "outlined"}
                            onClick={() => {
                            setFormState(1);
                            }}
                            sx={{
                            borderRadius: "10px",
                            py: 1.2,
                            fontWeight: "bold",
                            background:
                                formState === 1 ? "#2563eb" : "transparent",
                            borderColor: "#2563eb",
                            color: "white",
                            }}
                        >
                            Sign Up
                        </Button>
                        </Box>

                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            {formState === 1 ? 
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Full Name"
                                name="username"
                                value={name}
                                autoFocus
                                onChange={(e) => setName(e.target.value)}
                                sx={{
                                    mb: 2,
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "12px",
                                        background: "#1e293b",
                                        color: "white",
                                    },
                                    "& .MuiInputLabel-root": {
                                        color: "#94a3b8",
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#334155",
                                    },
                                    "&:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#2563eb",
                                    },
                                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#2563eb",
                                    },
                                }}
                            /> 
                            : <></>}

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                value={username}
                                autoFocus
                                onChange={(e) => setUsername(e.target.value)}
                                sx={{
                                    mb: 2,
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "12px",
                                        background: "#1e293b",
                                        color: "white",
                                    },
                                    "& .MuiInputLabel-root": {
                                        color: "#94a3b8",
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#334155",
                                    },
                                    "&:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#2563eb",
                                    },
                                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#2563eb",
                                    },
                                }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                sx={{
                                    mb: 2,
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "12px",
                                        background: "#1e293b",
                                        color: "white",
                                    },
                                    "& .MuiInputLabel-root": {
                                        color: "#94a3b8",
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#334155",
                                    },
                                    "&:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#2563eb",
                                    },
                                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#2563eb",
                                    },
                                }}
                            />

                            <Typography
                                sx={{
                                    color: "#f87171",
                                    fontSize: "14px",
                                    mt: 1,
                                    textAlign: "center",
                                }}
                                >
                                {error}
                            </Typography>

                            <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                py: 1.4,
                                
                                borderRadius: "12px",
                                fontSize: "16px",
                                fontWeight: "bold",
                                background: "#2563eb",
                                boxShadow: "0 4px 20px rgba(37,99,235,0.4)",
                                "&:hover": {
                                background: "#1d4ed8",
                                },
                            }}
                            onClick={handleAuth}
                            >
                                {formState === 0 ? "Login " : "Register"}
                            </Button>

                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Snackbar

                open={open}
                autoHideDuration={4000}
                message={message}
            />

        </ThemeProvider>
    );
}


