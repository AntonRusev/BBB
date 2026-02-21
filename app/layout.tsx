import type { Metadata } from "next";

import "./globals.css";

import NavBar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "BBB",
  description: "BG Bio Borsa",
  keywords: "borsa, market, BG, bio, bbb"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
