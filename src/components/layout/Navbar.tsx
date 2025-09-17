
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Dienstleistungen", path: "/dienstleistungen" },
  ];

//    { name: "Angebote", path: "/angebote" },
//    { name: "Erfolge", path: "/erfolge" },

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 flex-col w-full sm:w-auto sm:flex-row">
            <svg width="610" height="311" className="h-6 w-12" viewBox="0 0 610 311" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M463.824 166.556C463.941 164.052 464 161.533 464 159C464 71.1867 392.813 0 305 0C217.187 0 146 71.1867 146 159C146 161.533 146.059 164.052 146.176 166.556L204 108L270 127.25L305 87L340 127.25L406 108L463.824 166.556Z" fill="#FBE3C4" />
              <path d="M276 144L204 124L248 175L276 144Z" fill="#8F8F8F" />
              <path d="M125 216L3 245H125L204 154V124L125 216Z" fill="#8F8F8F" />
              <path d="M204 154V124L248 175L235 190L204 154Z" fill="#CCCCCC" />
              <path d="M0 311V304H181L305 161V170L183 311H0Z" fill="#8F8F8F" />
              <path d="M181 252L305 109V154L181 298H3L181 252Z" fill="#BF0000" />
              <path d="M334 144L406 124L362 175L334 144Z" fill="#8F8F8F" />
              <path d="M485 216L607 245H485L406 154V124L485 216Z" fill="#8F8F8F" />
              <path d="M406 154V124L362 175L375 190L406 154Z" fill="#CCCCCC" />
              <path d="M610 311V304H429L305 161V170L427 311H610Z" fill="#8F8F8F" />
              <path d="M429 252L305 109V154L429 298H607L429 252Z" fill="#BF0000" />
              <rect x="275" y="248" width="27" height="27" fill="#8F8F8F" />
              <rect x="308" y="248" width="27" height="27" fill="#8F8F8F" />
              <rect x="275" y="281" width="27" height="27" fill="#8F8F8F" />
              <rect x="308" y="281" width="27" height="27" fill="#8F8F8F" />
            </svg>
            <span className="text-xl md:text-2xl font-logo font-semibold">
              <span>Antonella & Antonio </span>
              <span className="text-brand-red"> Immobilien</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "font-medium transition-colors hover:text-brand-red",
                  location.pathname === item.path
                    ? "text-brand-red"
                    : "text-brand-charcoal"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brand-charcoal hover:text-brand-red"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "block font-medium transition-colors hover:text-brand-red",
                      location.pathname === item.path
                        ? "text-brand-red"
                        : "text-brand-charcoal"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
