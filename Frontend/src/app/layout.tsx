import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import { Montserrat } from 'next/font/google';

// Initialize the font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'], 
});

export const metadata: Metadata = {
  title: "JIRA Clone",
  description: "Task Management App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
