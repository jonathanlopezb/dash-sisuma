"use client";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
      <Head>
        {/* Metadata */}
        <title>Perfil de Usuario - Gestión de Créditos</title>
        <meta name="description" content="Visualiza y gestiona el perfil de usuario, incluyendo el saldo pendiente, cuotas pagadas y el historial de créditos." />
        <meta name="keywords" content="usuario, perfil, crédito, saldo pendiente, historial de créditos, gestión financiera" />
        <meta name="author" content="SISUMA" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <ThemeProvider theme={baselightTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
