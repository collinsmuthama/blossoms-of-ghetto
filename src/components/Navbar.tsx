import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logos/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg shadow-md border-b border-border/50"
          : "bg-background/60 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20 transition-all duration-500">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="Blossoms of Ghetto Logo"
            className="w-10 h-10 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
            style={{ imageRendering: 'auto', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' }}
          />
          <span
            className="font-display text-xl font-bold transition-colors duration-300"
            style={{ color: 'hsl(205, 70%, 45%)' }}
          >
            Blossoms of Ghetto
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-medium transition-all duration-300 hover:text-primary after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 ${
                location.pathname === link.path
                  ? "text-primary after:w-full"
                  : "text-muted-foreground after:w-0 hover:after:w-full"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <Link to="/donate">
              <Heart className="w-4 h-4" /> Donate
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground transition-transform duration-300 hover:scale-110"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-lg border-b pb-4">
          <div className="container flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium py-2 transition-all duration-300 hover:text-primary hover:translate-x-1 ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 w-fit">
              <Link to="/donate" onClick={() => setOpen(false)}>
                <Heart className="w-4 h-4" /> Donate
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
