import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/src/components/layout/Footer";
import Navbar from "@/src/components/layout/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Six Strings",
    template: "%s | Six Strings",
  },
  description:
    "A premium editorial archive devoted to the stories, records, and enduring lineage of rock and heavy metal.",
  keywords: ["rock", "heavy metal", "bands", "albums", "music archive", "editorial"],
  openGraph: {
    title: "Six Strings",
    description:
      "A premium editorial archive devoted to the stories, records, and enduring lineage of rock and heavy metal.",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
