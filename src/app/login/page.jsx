"use client"
import React from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Context } from '../components/AuthProvider';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckError } from '../components/CheckError';
import { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const login = () => {

    const router = useRouter()
    const { setAuth,setUser } = Context()

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

   
    const [formError, setFormError] = useState({
        username: "",
        password: "",
        invalid: ""

    })


    const handlChange = (e) => {
        const { name, value } = e.target;
        setFormData((prvaState) => ({
            ...prvaState,
            [name]: value
        }))

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const { username, password } = formData

        console.log("user", username)
        console.log("passowrd", password)

        if (username === "chauhoaivu111@gmail.com" && password === "hoaivu123") {
            router.push("/")
            setAuth(true)
            setUser(username)

        }
        else {
            setFormError({ invalid: "Invalid password or username" })
        }
    }


    console.log(formData.username)
    console.log(formData.password)


    useEffect(() => {
        CheckError(formData, setFormError)
    }, [formData.username, formData.password])


    return (
        < >
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                onChange={handlChange}
                                value={formData.username}
                                error={Boolean(formError.username)}
                                helperText={formError.username}
                                name='username'
                                type='text'
                                label="username"
                                margin="normal"
                                required
                                fullWidth
                                autoFocus
                                // autoComplete="username"

                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                onChange={handlChange}
                                value={formData.password}
                                error={Boolean(formError.password)}
                                helperText={formError.password}
                                autoFocus
                                autoComplete="current-password"

                            />
                            <Box>
                                {
                                    formError.invalid && <p style={{ color: "red" }}>{formError.invalid}</p>
                                }

                            </Box>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                           

                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default login