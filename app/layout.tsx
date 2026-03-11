import type { Metadata } from "next";

import "./globals.css";

import { Toaster } from "sonner"

import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

          <Toaster position="bottom-center" richColors />
        </main>

        <Footer />
      </body>
    </html>
  );
}
