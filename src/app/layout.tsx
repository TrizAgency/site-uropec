import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Uropec",
  description: "Excelência em qualidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="overflow-x-hidden">
      <body
        className={`${inter.variable} antialiased overflow-x-hidden bg-[#f6f6f6]`}
      >
        {children}
      </body>
    </html>
  );
}
