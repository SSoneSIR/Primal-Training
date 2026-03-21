import type { Metadata } from "next";
import {
  Archivo,
  Barlow_Condensed,
  Geist_Mono,
} from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const bodyFont = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const headingFont = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const monoFont = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
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
        className={`${bodyFont.variable} ${headingFont.variable} ${monoFont.variable} mx-auto max-w-7xl`}
      >
        {children}
      </body>
    </html>
  );
}
