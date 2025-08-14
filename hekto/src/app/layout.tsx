"use client";

import { Header } from "@/components/Header";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
