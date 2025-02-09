import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Catapulta | Deploy smart contracts effortlessly",
  description: "Deploy smart contracts effortlessly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`dark ${inter.className} antialiased`}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
