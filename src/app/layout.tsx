import { JSX } from "react";
import type { Metadata } from "next";
import {
  Manrope,
  Poppins,
  Plus_Jakarta_Sans,
  Questrial,
  Lato,
  Geist,
  Inter
} from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: "--font-manrope",
  subsets: ['latin'], // ✅ Added
});

const poppins = Poppins({
  weight: ['200', '400', '600'],
  variable: '--font-poppins',
  subsets: ['latin'],
});

const questrial = Questrial({
  weight: ['400'],
  variable: '--font-questrial',
  subsets: ['latin'],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  variable: "--font-lato",
  subsets: ['latin'],
});

const inter = Inter({
  weight: ['200', '400', '700', '900'],
  variable: "--font-inter",
  subsets: ['latin'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['200', '400', '700'],
  variable: "--font-plusJakartaSans",
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Welcome to AI Coach",
  description: "An AI-powered web application landing page.",
};

/**
 * RootLayout component serves as the base layout for the application.
 * It wraps the entire application and applies global styles and fonts.
 * 
 * @param {Readonly<{ children: React.ReactNode }>} props - The properties passed to the RootLayout component.
 * @returns {JSX.Element} The rendered layout with global styles and fonts applied.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body
        className={`
          ${manrope.variable}
          ${poppins.variable}
          ${geist.variable} 
          ${questrial.variable}
          ${lato.variable}
          ${inter.variable}
          ${plusJakartaSans.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
