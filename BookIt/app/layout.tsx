import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "./head";
import { GlobalProvider } from "./GlobalProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>
        <GlobalProvider>
          <Header />
          {children}
          <Footer />
        </GlobalProvider>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

        <script src="https://kit.fontawesome.com/9edb65c86a.js"></script>
      </body>
    </html>
  );
}
