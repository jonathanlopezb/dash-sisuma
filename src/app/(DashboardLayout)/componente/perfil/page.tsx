import * as React from 'react';
import { Box, Container, Card, CardContent, Typography, Divider, Grid, LinearProgress } from '@mui/material';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

// Cargamos ApexCharts dinámicamente porque Next.js hace SSR y ApexCharts depende del DOM
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

// Definimos los tipos para los datos del usuario
interface UserData {
  name: string;
  email: string;
  phone: string;
  creditBalance: number;
  installmentsPaid: number;
  totalInstallments: number;
  paymentHistory: number[];
}

export default function Profile() {
  // Datos ficticios del usuario y su comportamiento de crédito
  const userData: UserData = {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    phone: '+34 600 123 456',
    creditBalance: 5000,
    installmentsPaid: 10,
    totalInstallments: 12,
    paymentHistory: [500, 600, 700, 400, 650, 700, 800, 550, 900, 1000],
  };

  // Configuración del gráfico de comportamiento de pagos (ApexOptions es el tipo de opciones de ApexCharts)
  const chartOptions: ApexOptions = {
    chart: {
      id: 'payment-history-chart',
      toolbar: {
        show: false, // Ocultamos el toolbar por estética
      },
    },
    xaxis: {
      categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre'],
    },
    stroke: {
      curve: 'smooth',
    },
    colors: ['#6A82FB'],
    dataLabels: {
      enabled: false,
    },
    grid: {
      strokeDashArray: 4,
    },
    markers: {
      size: 5,
    },
  };

  // Series de datos para el gráfico
  const chartSeries = [
    {
      name: 'Monto Pagado (€)',
      data: userData.paymentHistory,
    },
  ];

  return (
    <Container component="main" sx={{ mt: 4 }}>
      {/* Sección de Datos Personales */}
      <Card sx={{ mb: 4, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Datos Personales
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body1">
            <strong>Nombre: </strong>{userData.name}
          </Typography>
          <Typography variant="body1">
            <strong>Correo Electrónico: </strong>{userData.email}
          </Typography>
          <Typography variant="body1">
            <strong>Teléfono: </strong>{userData.phone}
          </Typography>
        </CardContent>
      </Card>

      {/* Sección de Información Financiera */}
      <Grid container spacing={4}>
        {/* Saldo pendiente */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Saldo Pendiente
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="h4" color="error">
                €{userData.creditBalance.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Cuotas saldadas */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Cuotas Saldadas
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body1">
                {userData.installmentsPaid} de {userData.totalInstallments} cuotas pagadas
              </Typography>

              {/* Barra de progreso para cuotas */}
              <LinearProgress
                variant="determinate"
                value={(userData.installmentsPaid / userData.totalInstallments) * 100}
                sx={{ mt: 2, height: '10px', borderRadius: '5px' }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Sección de Comportamiento de Pago (Gráfico con ApexCharts) */}
      <Card sx={{ mt: 4, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Comportamiento de Pago
          </Typography>
          <Divider sx={{ mb: 2 }} />
          {/* Gráfico de ApexCharts */}
          <Box sx={{ height: '300px' }}>
            <Chart
              options={chartOptions}
              series={chartSeries}
              type="line"
              height="300"
            />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
