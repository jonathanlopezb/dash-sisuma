"use client";
import type { Metadata } from "next";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const metadata: Metadata = {
  title: "SISUMA - Creditos al instante.",
  description: "Somos una empresa de créditos especializada en ofrecer soluciones financieras rápidas y seguras. Nuestro compromiso es facilitarte el acceso a financiamiento para que alcances tus metas de manera eficiente y sin complicaciones.",
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
