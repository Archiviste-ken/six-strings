import Navbar from "@/src/components/layout/Navbar";
import { Geist } from "next/font/google";
import { cn } from "@/src/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}
