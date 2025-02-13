import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
  inverted?: boolean;
}

const Logo = ({ inverted }: LogoProps) => {
  return (
    <Link
      href="/"
      className={cn(
        "lowercase text-xl font-semibold italic relative z-50",
        inverted && "text-white"
      )}
    >
      Netrunner<span className="text-cyan-500">.</span>
    </Link>
  );
};

export default Logo;
