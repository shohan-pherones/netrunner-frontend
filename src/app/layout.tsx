import { Footer, Header } from "@/components/partials";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Netrunner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={cn(inter.className, "antialiased overflow-x-hidden")}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
