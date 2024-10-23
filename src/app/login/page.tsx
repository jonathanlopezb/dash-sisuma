'use client'
import * as React from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Todos los campos son obligatorios');
      return;
    }
    console.log({ email, password });
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        background: 'linear-gradient(135deg, #6A82FB 0%, #FC5C7D 100%)',
        borderRadius: '15px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        padding: '40px',
        marginTop: '80px',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <Image
          src="/images/logo.png" // Ruta a tu logo en la carpeta public
          alt="Logo"
          width={100}
          height={100}
          priority
          style={{ borderRadius: '50%' }} // Hacemos que el logo sea circular
        />

        {/* Título del formulario */}
        <Typography
          component="h1"
          variant="h4"
          sx={{
            color: '#fff',
            fontWeight: 'bold',
            marginTop: '20px',
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          Bienvenido
        </Typography>
        <Typography
          component="p"
          variant="body1"
          sx={{ color: '#ddd', marginBottom: '30px' }}
        >
          ¡Inicia sesión para continuar!
        </Typography>

        {/* Formulario */}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electrónico"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '10px',
              '& .MuiInputBase-input': {
                color: '#333',
              },
              '& label.Mui-focused': {
                color: '#FC5C7D',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(0, 0, 0, 0.1)',
                },
                '&:hover fieldset': {
                  borderColor: '#FC5C7D',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FC5C7D',
                },
              },
            }}
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
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '10px',
              '& .MuiInputBase-input': {
                color: '#333',
              },
              '& label.Mui-focused': {
                color: '#FC5C7D',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(0, 0, 0, 0.1)',
                },
                '&:hover fieldset': {
                  borderColor: '#FC5C7D',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FC5C7D',
                },
              },
            }}
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
              background: 'linear-gradient(135deg, #FC5C7D 0%, #6A82FB 100%)',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: '30px',
              padding: '10px 20px',
              transition: 'background 0.3s ease-in-out',
              '&:hover': {
                background: 'linear-gradient(135deg, #6A82FB 0%, #FC5C7D 100%)',
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
