"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { GlobalStyle } from "@/styles/globalStyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefin.className} ${lato.variable}`}>
        <QueryClientProvider client={queryClient}>
          <StyledComponentsRegistry>
            <GlobalStyle />
            <Header />
            {children}
            <Footer />
          </StyledComponentsRegistry>
        </QueryClientProvider>
      </body>
    </html>
  );
}
