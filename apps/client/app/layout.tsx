import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

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
      <body className={` max-w-7xl mx-auto`}>{children}</body>
    </html>
  );
}
