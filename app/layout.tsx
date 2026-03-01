import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const coolvetica = localFont({
  variable: "--font-coolvetica",
  src: "../public/fonts/CoolveticaRg.otf"
});

const malevice = localFont({
  variable: "--font-malevice",
  src: "../public/fonts/MaleviceInkbleed.extra-bold.otf"
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "café",
  description: "Centralizing Actions For Everyone - Stroke Prevention",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${coolvetica.variable} ${malevice.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
