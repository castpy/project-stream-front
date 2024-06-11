"use client";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import useLogin from "./useLogin";
import { validate } from "email-validator";

const LoginTemplate = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleCreateAccount,
    error,
    severity,
    createAlertMessage,
    showButton,
    enableButton,
    setEnableButton,
    handleSubmit,
    loading,
  } = useLogin();

  useEffect(() => {
    if (email && email.length > 3 && !validate(email)) {
      createAlertMessage("Email inválido", "error");
    } else if (password && password.length < 6) {
      createAlertMessage("Senha deve ter no mínimo 6 caracteres", "error");
    } else {
      createAlertMessage("", "error", 0);
    }

    if (email && validate(email) && password && password.length >= 6) {
      setEnableButton(true);
    } else {
      setEnableButton(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 1,
        gap: 2,
      }}
    >
      <Typography variant="h1">Login</Typography>
      <Typography variant="body1">
        Faça login com sua conta ou crie uma
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 1,
          gap: 2,
          width: "100%",
          maxWidth: 500,
        }}
      >
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          fullWidth
          sx={{
            "& .MuiInputBase-input": {
              color: "white",
            },
          }}
        />
        <TextField
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          fullWidth
          sx={{
            "& .MuiInputBase-input": {
              color: "white",
            },
          }}
        />
        {error && (
          <Alert
            severity={severity}
            variant="filled"
            sx={{
              width: "100%",
            }}
          >
            {error}
          </Alert>
        )}
        {loading && <CircularProgress color="secondary" /> }
        {showButton && (
          <>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              disabled={!enableButton || loading}
              onClick={handleSubmit}
            >
              Entrar
            </Button>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              onClick={handleCreateAccount}
            >
              Cadastrar
            </Button>
          </>
        )}
      </Box>

      <Typography variant="caption" textAlign="center">
        Ao fazer login você concorda com o uso de cookies. Utilizamos apenas
        cookies necessários para autorizar determinadas ações.
      </Typography>
      <Typography variant="caption" textAlign="center">
        Se aprovarmos seu curta-metragem, ele se conectará automaticamente ao
        seu perfil.
      </Typography>
    </Box>
  );
};

export default LoginTemplate;
