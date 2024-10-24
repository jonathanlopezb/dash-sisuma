'use client'
import * as React from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';

export default function Login() {
  const [cedula, setcedula] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!cedula || !password) {
      setError('Todos los campos son obligatorios');
      return;
    }
    // Aquí puedes añadir la lógica de autenticación
    console.log({ cedula, password });
  };
  

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <Image
          src="/images/logos/logo.png" // Ruta a tu logo en la carpeta public
          alt="Logo"
          width={150} // Ajusta el ancho
          height={150} // Ajusta la altura
          priority // Optimización de carga
        />

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="cedula"
            label="Cedula"
            name="cedula"
            autoComplete="cedula"
            autoFocus
            value={cedula}
            onChange={(e) => setcedula(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Mensaje de error si falta algún campo */}
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: '#1976d2', // Color azul de Material-UI
              ':hover': {
                backgroundColor: '#115293', // Color más oscuro al pasar el mouse
              },
            }}
          >
            Iniciar Sesión
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
