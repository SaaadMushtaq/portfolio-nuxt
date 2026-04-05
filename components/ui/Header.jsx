import Link from "next/link";
import { Button } from "./button";

//components
import Nav from "../Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-6 xl:py-10 text-white sticky top-0 z-50 glass border-b border-white/[0.06]">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold tracking-tight hover:opacity-80 transition-opacity">
            Saad
            <span className="text-accent drop-shadow-[0_0_8px_rgba(0,255,153,0.6)]">
              .
            </span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="shadow-glow-accent hover:shadow-glow-accent-lg transition-shadow duration-300">
              Hire me
            </Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
