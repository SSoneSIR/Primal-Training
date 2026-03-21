import type { Metadata } from "next";
import { Archivo, Barlow_Condensed, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Primal Training",
  description:
    "Performance-driven gym and community platform for Primal Training.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${barlowCondensed.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
