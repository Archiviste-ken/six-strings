import "./globals.css";
import Footer from "@/src/components/layout/Footer";
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
        
        <Footer />
      </body>
    </html>
  );
}