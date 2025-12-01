import "./globals.css";

import type { Metadata } from "next";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "Trackstack",
  description:
    "All-in-one tools that turn your inbox into income—so you can focus on the music.",
  icons: {
    icon: "/images/LOGO_MAIN.png",
    shortcut: "/images/LOGO_MAIN.png",
    apple: "/images/LOGO_MAIN.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0D1117] text-white overflow-y-auto font-sans">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
