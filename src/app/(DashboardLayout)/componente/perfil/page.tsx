'use client'
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
  startDate: string;
  endDate: string;
  loanAmount: number;
  installmentValue: number;
  remainingValue: number;
  paidValue: number;
  reloan: number;
  totalDebt: number;
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
    startDate: '2023-01-01',
    endDate: '2024-01-01',
    loanAmount: 12000,
    installmentValue: 1000,
    remainingValue: 5000,
    paidValue: 7000,
    reloan: 500,
    totalDebt: 12500,
  };

  // Configuración del gráfico de comportamiento de pagos
  const chartOptions: ApexOptions = {
    chart: {
      id: 'payment-history-chart',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ['1', '2', '3', '4', '5'],
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
        {/* Información del crédito */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Información del Crédito
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body1">
                <strong>Fecha Inicio: </strong>{userData.startDate}
              </Typography>
              <Typography variant="body1">
                <strong>Fecha Término: </strong>{userData.endDate}
              </Typography>
              <Typography variant="body1">
                <strong>Monto Prestado: </strong>€{userData.loanAmount.toFixed(2)}
              </Typography>
              <Typography variant="body1">
                <strong>Número de Cuotas: </strong>{userData.totalInstallments}
              </Typography>
              <Typography variant="body1">
                <strong>Valor de la Cuota: </strong>€{userData.installmentValue.toFixed(2)}
              </Typography>
              <Typography variant="body1">
                <strong>Valor Pendiente: </strong>€{userData.remainingValue.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Detalles de Pagos */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Detalles de Pagos
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body1">
                <strong>Cuotas Saldadas: </strong>{userData.installmentsPaid} de {userData.totalInstallments}
              </Typography>
              <Typography variant="body1">
                <strong>Valor Saldado: </strong>€{userData.paidValue.toFixed(2)}
              </Typography>
              <Typography variant="body1">
                <strong>Saldo Pendiente: </strong>€{userData.creditBalance.toFixed(2)}
              </Typography>
              <Typography variant="body1">
                <strong>Retanqueo: </strong>€{userData.reloan.toFixed(2)}
              </Typography>
              <Typography variant="body1">
                <strong>Total Deuda: </strong>€{userData.totalDebt.toFixed(2)}
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
