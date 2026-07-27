import "./globals.css";

import Navbar from "@/src/components/layout/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white">
        <Navbar />

        {children}
      </body>
    </html>
  );
}