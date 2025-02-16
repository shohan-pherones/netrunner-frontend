"use client";

import { Button, Logo } from "@/components/elements";
import { Menubar } from "@/components/partials";
import { navMenus } from "@/constants";
import useAuth from "@/hooks/auth/useAuth";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

const Header = () => {
  const [isInverted, setIsInverted] = useState(false);

  const pathname = usePathname();
  const { token, removeToken } = useAuth();

  useEffect(() => {
    switch (pathname) {
      case "/sign-up":
      case "/sign-in":
        setIsInverted(true);
        break;
      default:
        setIsInverted(false);
        break;
    }
  }, [pathname]);

  const handleSignOut = () => {
    removeToken();
    window.location.reload();
  };

  return (
    <header
      className={cn(
        "top-0 left-0 w-full px-20",
        token
          ? "py-5 bg-white border-b flex items-center justify-between sticky z-50"
          : "absolute py-10"
      )}
    >
      <Logo inverted={isInverted} />
      {token && (
        <Fragment>
          <Menubar menus={navMenus} />
          <Button onClick={handleSignOut} color="danger">
            Sign Out
          </Button>
        </Fragment>
      )}
    </header>
  );
};

export default Header;
