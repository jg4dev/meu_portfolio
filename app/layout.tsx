import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "João Gabriel | Desenvolvedor Front-end",
  description:
    "Portfólio de João Gabriel, desenvolvedor front-end em formação.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-900 text-zinc-100 overflow-x-hidden`}
      >
        <Navbar />

        {/* 👇 Agora a animação está em Client Component */}
        <PageTransition>{children}</PageTransition>

        <Footer />
      </body>
    </html>
  );
}