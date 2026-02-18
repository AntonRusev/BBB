import type { Metadata } from "next";

import "./globals.css";

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
          {children}
      </body>
    </html>
  );
}
