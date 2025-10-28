import React, { useState } from "react";
import Logo from "@/assets/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 text-gradient-cool bg-black/20 backdrop-blur-md">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="flex items-center"
              aria-label="GameZone Home"
            >
              <img src={Logo} alt="GameZone Logo" className="h-12 w-auto" />
            </a>
          </div>

          {/* Desktop Menu - Centered */}
          <nav
            className="hidden md:flex flex-1 justify-center"
            aria-label="Desktop navigation"
          >
            <ul className="flex space-x-10" role="menubar">
              <li role="none">
                <a
                  href="/"
                  className="font-roboto text-body-md hover:text-white/80 transition-colors"
                  role="menuitem"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li role="none">
                <a
                  href="/about"
                  className="font-roboto text-body-md hover:text-white/80 transition-colors"
                  role="menuitem"
                >
                  About
                </a>
              </li>
              <li role="none">
                <a
                  href="/contact"
                  className="font-roboto text-body-md hover:text-white/80 transition-colors"
                  role="menuitem"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Spacer for desktop symmetry - hidden on mobile */}
          <div className="hidden md:block flex-shrink-0 w-12"></div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg border-t border-white/10"
            aria-label="Mobile navigation"
          >
            <ul
              className="px-4 pt-4 pb-6 space-y-1 max-w-7xl mx-auto"
              role="menu"
            >
              <li role="none">
                <a
                  href="/"
                  className="font-roboto text-body-md hover:bg-white/10 px-4 py-3 rounded-md transition-colors block"
                  role="menuitem"
                  aria-current="page"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li role="none">
                <a
                  href="/about"
                  className="font-roboto text-body-md hover:bg-white/10 px-4 py-3 rounded-md transition-colors block"
                  role="menuitem"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li role="none">
                <a
                  href="/contact"
                  className="font-roboto text-body-md hover:bg-white/10 px-4 py-3 rounded-md transition-colors block"
                  role="menuitem"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
