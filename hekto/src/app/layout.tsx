"use client";

import { Josefin_Sans, Lato } from "next/font/google";
import StyledComponentsRegistry from "./_registry";

const josefin = Josefin_Sans({
  subsets: ["latin"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "400"],
  variable: "--font-lato",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefin.className} ${lato.variable}`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
