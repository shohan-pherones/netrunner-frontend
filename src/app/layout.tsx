import { Footer, Header } from "@/components/partials";
import { cn } from "@/lib/utils";
import ApolloClientProvider from "@/providers/ApolloClientProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
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
        <ApolloClientProvider>
          <Toaster />
          <Header />
          <main>{children}</main>
          <Footer />
        </ApolloClientProvider>
      </body>
    </html>
  );
}
