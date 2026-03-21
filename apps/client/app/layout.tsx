import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
	title: "Primal Training",
	description: "Bullhouse-style monorepo starter for Primal Training.",
};

type RootLayoutProps = {
	children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body>
				<div className="grain" />
				{children}
			</body>
		</html>
	);
}
