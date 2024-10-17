import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from 'next/image';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Martins Okanlawon - Prime Okanlawon - The Primotion Studio",
  description: "Generated by The Primotion Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header>
        <Image
          src="/assets/images/ThePrimotionStudio.png"
          alt="The Primotion Studio Logo"
          width={150}
          height={50}
        />
      </header>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
