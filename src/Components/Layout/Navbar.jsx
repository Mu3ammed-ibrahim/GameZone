import { useState, useCallback } from "react";
import Logo from "@/assets/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll handler - memoized to prevent unnecessary re-renders
  const handleSmoothScroll = useCallback((e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="fixed w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/5">
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
                  href="#hero"
                  className="font-roboto text-body-md text-white hover:text-gradient-gaming transition-all duration-300 cursor-pointer"
                  role="menuitem"
                  aria-current="page"
                  onClick={(e) => handleSmoothScroll(e, "#hero")}
                >
                  Home
                </a>
              </li>
              <li role="none">
                <a
                  href="#features"
                  className="font-roboto text-body-md text-white hover:text-gradient-gaming transition-all duration-300 cursor-pointer"
                  role="menuitem"
                  onClick={(e) => handleSmoothScroll(e, "#features")}
                >
                  Features
                </a>
              </li>
              <li role="none">
                <a
                  href="#games"
                  className="font-roboto text-body-md text-white hover:text-gradient-gaming transition-all duration-300 cursor-pointer"
                  role="menuitem"
                  onClick={(e) => handleSmoothScroll(e, "#games")}
                >
                  Games
                </a>
              </li>
              <li role="none">
                <a
                  href="#accessories"
                  className="font-roboto text-body-md text-white hover:text-gradient-gaming transition-all duration-300 cursor-pointer"
                  role="menuitem"
                  onClick={(e) => handleSmoothScroll(e, "#accessories")}
                >
                  Accessories
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
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
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
            className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-slate-950/95 to-slate-900/95 backdrop-blur-xl border-t border-purple-500/20 shadow-xl"
            aria-label="Mobile navigation"
          >
            <ul
              className="px-4 pt-4 pb-6 space-y-1 max-w-7xl mx-auto"
              role="menu"
            >
              <li role="none">
                <a
                  href="#hero"
                  className="font-roboto text-body-md text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 hover:border-l-4 hover:border-purple-500 px-4 py-3 rounded-md transition-all duration-300 block cursor-pointer"
                  role="menuitem"
                  aria-current="page"
                  onClick={(e) => handleSmoothScroll(e, "#hero")}
                >
                  Home
                </a>
              </li>
              <li role="none">
                <a
                  href="#features"
                  className="font-roboto text-body-md text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 hover:border-l-4 hover:border-purple-500 px-4 py-3 rounded-md transition-all duration-300 block cursor-pointer"
                  role="menuitem"
                  onClick={(e) => handleSmoothScroll(e, "#features")}
                >
                  Features
                </a>
              </li>
              <li role="none">
                <a
                  href="#games"
                  className="font-roboto text-body-md text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 hover:border-l-4 hover:border-purple-500 px-4 py-3 rounded-md transition-all duration-300 block cursor-pointer"
                  role="menuitem"
                  onClick={(e) => handleSmoothScroll(e, "#games")}
                >
                  Games
                </a>
              </li>
              <li role="none">
                <a
                  href="#accessories"
                  className="font-roboto text-body-md text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 hover:border-l-4 hover:border-purple-500 px-4 py-3 rounded-md transition-all duration-300 block cursor-pointer"
                  role="menuitem"
                  onClick={(e) => handleSmoothScroll(e, "#accessories")}
                >
                  Accessories
                </a>
              </li>
            </ul>

            {/* Mobile Menu Accent Line */}
            <div className="h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600"></div>
          </nav>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
