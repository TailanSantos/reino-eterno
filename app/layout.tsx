import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reino Eterno — Crônicas da Primeira Aurora",
  description: "Explore as raças, regiões e sistemas de Primordia. Role o D20 e escolha seu destino.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
