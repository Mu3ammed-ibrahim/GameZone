import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 text-gradient-cool bg-transparent">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 w-1/4">
            <a
              href="/"
              className="font-poppins font-semibold text-heading-sm tracking-tight"
              aria-label="GameZone Home"
            >
              GameZone
            </a>
          </div>

          {/* Desktop Menu */}
          <nav
            className="hidden md:flex flex-grow justify-center"
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

          {/* Empty div for symmetry */}
          <div className="w-1/4" aria-hidden="true"></div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                />
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
            className="md:hidden absolute top-full left-0 w-full bg-black/60 backdrop-blur-sm"
            aria-label="Mobile navigation"
          >
            <ul
              className="px-2 pt-4 pb-3 space-y-2 sm:px-3 max-w-7xl mx-auto"
              role="menu"
            >
              <li role="none">
                <a
                  href="/"
                  className="font-roboto text-body-md hover:bg-white/10 px-4 py-3 rounded-md transition-colors block"
                  role="menuitem"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li role="none">
                <a
                  href="/about"
                  className="font-roboto text-body-md hover:bg-white/10 px-4 py-3 rounded-md transition-colors block"
                  role="menuitem"
                >
                  About
                </a>
              </li>
              <li role="none">
                <a
                  href="/contact"
                  className="font-roboto text-body-md hover:bg-white/10 px-4 py-3 rounded-md transition-colors block"
                  role="menuitem"
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
