import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import { UserProvider } from '@auth0/nextjs-auth0/client';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (  
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          <Navbar/>
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
