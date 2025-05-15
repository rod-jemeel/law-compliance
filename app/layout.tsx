import type { Metadata } from "next";

import "./globals.css";
import Providers from "./_sections/providers";

import Navbar from "./_sections/navbar";
import Footer from "./_sections/footer";
import WelcomeAlert from "./_components/welcome-alert";

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
      <body>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <WelcomeAlert />
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
