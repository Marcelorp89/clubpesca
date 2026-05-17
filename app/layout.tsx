import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfairDisplay  = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight:["400", "700"]
});

export const metadata: Metadata = {
  title: "My app",
  description: "Proyecto de sitio web del club de pesca chinook tolten",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="h-full flex flex-col">{children}</body>
    </html>
  );
}
