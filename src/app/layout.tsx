import { Header } from "@/components/header/Header";
import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Codarse",
  description: "Plataformas de cursos gratuitos do youtube",
};

export default function RootLayout({ children, }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body className={nunito.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
