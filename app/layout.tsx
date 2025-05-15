import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./_sections/providers";
import Motion from "./_sections/motion";
import Navbar from "./_sections/navbar";
import Footer from "./_sections/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BP Compliance",
  description: "Business Permits and Compliance Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Providers>
          <Navbar />
          <div className=" min-h-screen w-full">
            <Motion>{children}</Motion>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
