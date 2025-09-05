import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    'About',
    'Services', 
    'Projects',
    'Contact',
    'Products',
    'Investors',
    'Career'
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-12 py-4 lg:py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/images/kml-logo-1.png" 
              alt="KML Logo" 
              className="h-14 w-auto object-cover" 
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            <div className="flex items-center gap-6 xl:gap-8">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  className="text-white text-xs xl:text-sm font-[one] uppercase tracking-wide hover:text-green-300 transition-all duration-300 relative group cursor-pointer"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2 hover:text-green-300 transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-800">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={closeMobileMenu}
                  className="block w-full text-left text-white text-sm font-[one] uppercase tracking-wide hover:text-green-300 transition-colors duration-300 py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;