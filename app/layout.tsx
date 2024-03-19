import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Header from "@/app/components/header";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Itaú | Landing Page",
  description: "This is fake landing page for Itaú bank.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
