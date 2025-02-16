"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    switch (pathname) {
      case "/sign-up":
      case "/sign-in":
        setIsVisible(true);
        break;
      default:
        setIsVisible(false);
        break;
    }
  }, [pathname]);

  return (
    <footer
      className={cn(
        "absolute bottom-0 left-0 w-full px-20 py-10 text-center text-xs text-white",
        isVisible ? "" : "hidden"
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
