import { cn } from "@/lib/utils";
import { TMenu } from "@/types";
import Link from "next/link";

interface MenubarProps {
  menus: TMenu[];
  orientation?: "horizontal" | "vertical";
}

const Menubar: React.FC<MenubarProps> = ({
  menus,
  orientation = "horizontal",
}) => {
  return (
    <nav
      className={cn(
        "flex gap-x-5 gap-y-2",
        orientation === "vertical" ? "flex-col" : "flex-row items-center"
      )}
    >
      {menus.map((menu, index) => (
        <Link
          key={index + menu.route}
          href={menu.route}
          className="flex items-center gap-1 group transition-all"
        >
          {menu.icon && (
            <span className="group-hover:text-cyan-500">
              <menu.icon size={menu.label ? 16 : 20} />
            </span>
          )}
          {menu.label && <span>{menu.label}</span>}
        </Link>
      ))}
    </nav>
  );
};

export default Menubar;
