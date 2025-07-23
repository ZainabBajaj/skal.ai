import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import GlobalSquidBackground from "./components/GlobalSquidBackground";

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
  title: "Skal AI - Transform Your Business with AI Solutions",
  description: "Leading AI and software development company specializing in machine learning, automation, and full-stack solutions that drive business growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalSquidBackground />
        {children}
      </body>
    </html>
  );
}
