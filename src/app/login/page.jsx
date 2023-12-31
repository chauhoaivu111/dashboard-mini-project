/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Context } from "../context/AuthProvider";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckError } from "../components/CheckError";
import { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Container from "@mui/material/Container";


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const login = () => {
  const router = useRouter();
  const { setAuth, setUser } = Context();
  const [openSnack, setOpenSnack] = useState();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [formError, setFormError] = useState({
    username: "",
    password: "",
  });

  const handlChange = (e) => {
    const { name, value } = e.target;
    setFormData((prvaState) => ({
      ...prvaState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    if (username === "chauhoaivu111@gmail.com" && password === "hoaivu123") {
      router.push("/");
      setAuth(true);
      setUser(username);
    } else {
      setOpenSnack(true);
    }
  };

  useEffect(() => {
    CheckError(formData, setFormError);
  }, [formData.username, formData.password, formData]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnack(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          my: 8, 
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
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
            name="username"
            type="text"
            label="username"
            margin="normal"
            required
            fullWidth
         
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
          />
          <Stack
            spacing={2}
            sx={{ width: "100%", position: "absolute", top: 0, right: 0 }}
          >
            <Snackbar
              open={openSnack}
              autoHideDuration={700}
              onClose={handleClose}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: "100%" }}
              >
                Invalid password or username
              </Alert>
            </Snackbar>
          
          </Stack>

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
  
    </Container>
  );
};

export default login;
