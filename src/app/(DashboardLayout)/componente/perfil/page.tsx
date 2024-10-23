'use client'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Container, Card, CardContent, Typography, Divider, Grid, LinearProgress } from '@mui/material';
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

interface CreditHistory {
    startDate: string;
    endDate: string;
    loanAmount: number;
    installments: number;
    paidAmount: number;
    status: 'Pagado' | 'Pendiente';
}

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
    creditHistory: CreditHistory[];  // Agregamos el historial de créditos
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
        paymentHistory: [2000, 2000, 2000, 1000],
        startDate: '2023-01-01',
        endDate: '2024-01-01',
        loanAmount: 12000,
        installmentValue: 1000,
        remainingValue: 5000,
        paidValue: 7000,
        reloan: 500,
        totalDebt: 12500,
        creditHistory: [
            {
                startDate: '2022-01-01',
                endDate: '2023-01-01',
                loanAmount: 10000,
                installments: 12,
                paidAmount: 10000,
                status: 'Pagado',
            },
            {
                startDate: '2021-01-01',
                endDate: '2022-01-01',
                loanAmount: 8000,
                installments: 12,
                paidAmount: 8000,
                status: 'Pagado',
            },
        ],  // Historial de créditos
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
            categories: ['cuota 1', 'cuota 2', 'cuota 3', 'cuota 4'],
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
            name: 'Monto Pagado ($)',
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
                                <strong>Monto Prestado: </strong>${userData.loanAmount.toFixed(2)}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Número de Cuotas: </strong>{userData.totalInstallments}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Valor de la Cuota: </strong>${userData.installmentValue.toFixed(2)}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Valor Pendiente: </strong>${userData.remainingValue.toFixed(2)}
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
                                <strong>Valor Saldado: </strong>${userData.paidValue.toFixed(2)}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Saldo Pendiente: </strong>${userData.creditBalance.toFixed(2)}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Retanqueo: </strong>${userData.reloan.toFixed(2)}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Total Deuda: </strong>${userData.totalDebt.toFixed(2)}
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
                            height="1000"
                        />
                    </Box>
                </CardContent>
            </Card>
            <Card sx={{ mt: 4, boxShadow: 3 }}>
                <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                        Histórico de Créditos
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="historial de créditos">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Fecha Inicio</TableCell>
                                    <TableCell>Fecha Término</TableCell>
                                    <TableCell>Monto Prestado</TableCell>
                                    <TableCell>Número de Cuotas</TableCell>
                                    <TableCell>Valor Pagado</TableCell>
                                    <TableCell>Estado</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {userData.creditHistory.map((credit, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{credit.startDate}</TableCell>
                                        <TableCell>{credit.endDate}</TableCell>
                                        <TableCell>${credit.loanAmount.toFixed(2)}</TableCell>
                                        <TableCell>{credit.installments}</TableCell>
                                        <TableCell>${credit.paidAmount.toFixed(2)}</TableCell>
                                        <TableCell>{credit.status}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </Container>
    );
}
