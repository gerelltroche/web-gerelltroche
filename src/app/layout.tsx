import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";
import Link from "next/link";
import "./globals.css";
import EmailSignup from "@/components/EmailSignup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Gerell Troche",
	description: "Software n Stuff"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} ${styles.bodyWrapper}`}>
				<div className={styles.nav}>
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
					<Link href="/projects">Projects</Link>
					<Link href="/contact">Contact</Link>
				</div>
				<main className={styles.main}>{children}</main>
				<footer className={styles.footer}>
					<p>Get my updates</p>
					<EmailSignup />
				</footer>
			</body>
		</html>
	);
}
