import type { Metadata } from "next";
import { Oswald, Space_Grotesk, Space_Mono } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import { getAssetPath } from "@/lib/assets";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tennisschule Amir | Professionelles Tennistraining in Darmstadt & Weiterstadt",
  description:
    "Geleitet von Ex-Davis-Cup-Spieler und GPTCA/ATP A-Lizenz Coach Amir Reza. Individuelle Technik- und Matchanalyse, Tenniscamps, Jugendförderung powered by Yonex.",
  keywords: [
    "Tennisschule Amir",
    "Tennistraining Darmstadt",
    "Tennis Weiterstadt",
    "Amir Reza",
    "ATP Coach",
    "Rafa Nadal Academy Partner",
    "Yonex Teststützpunkt",
    "Kinder Tennis",
  ],
  icons: {
    icon: getAssetPath("/images/amir/Logo-Amir.png"),
  },
};

/**
 * Root application layout providing typography CSS variables, global styling, and cookie banner.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`dark ${oswald.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <body className="bg-surface-base font-body-md text-on-surface antialiased selection:bg-border-highlight selection:text-surface-base min-h-screen">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
