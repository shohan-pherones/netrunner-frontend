"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Footer = () => {
  const [textColor, setTextColor] = useState<
    "text-black" | "text-white" | "text-cyan-500"
  >("text-black");
  const pathname = usePathname();

  useEffect(() => {
    switch (pathname) {
      case "/sign-up":
      case "/sign-in":
        setTextColor("text-white");
        break;
      default:
        setTextColor("text-black");
        break;
    }
  }, [pathname]);

  return (
    <footer
      className={cn(
        "absolute bottom-0 left-0 w-full px-20 py-10 text-center text-xs",
        textColor
      )}
    >
      <p>
        &copy; {new Date().getFullYear()},{" "}
        <Link href="/" className="hover:underline">
          Netrunner Platforms, Inc.
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
