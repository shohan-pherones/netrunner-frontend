import { Logo } from "@/components/elements";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full px-20 py-10">
      <Logo inverted />
    </header>
  );
};

export default Header;
