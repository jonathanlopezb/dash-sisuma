import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Metadata } from "next";

// Definir metadata
export const metadata: Metadata = {
  title: "Perfil de Usuario - Gestión de Créditos",
  description: "Visualiza y gestiona el perfil de usuario, incluyendo el saldo pendiente, cuotas pagadas y el historial de créditos.",
  keywords: ["usuario", "perfil", "crédito", "saldo pendiente", "historial de créditos", "gestión financiera"],
  authors: [{ name: "Tu Nombre o Compañía" }],
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
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
