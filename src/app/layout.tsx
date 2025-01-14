import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoginForm from "@/components/login-form";
import CartFlag from "@/components/cart-dialog";
import Checkout from "@/components/checkout";
import { UniversalProvider } from "@/context/ServicesContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Autosmith: Bringing the garage to you",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {/* <div className="sticky z-50 top-0"> */}
        {/* <LoginForm /> */}
        {/* </div> */}
        <UniversalProvider>{children}</UniversalProvider>
      </body>
    </html>
  );
}
