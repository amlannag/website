import React, { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full fixed top-0 z-[99] left-0 bg-neutral-900 shadow-md ">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-neutral-200 font-bold text-lg">
          <Link href="/">MyPortfolio</Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-neutral-200 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-neutral-200 hover:text-neutral-400 cursor-pointer transition-colors font-bold"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-neutral-200 hover:text-neutral-400 cursor-pointer transition-colors font-bold"
          >
            Projects
          </Link>
          {/* <Link
            href="https://docs.google.com/document/d/1ruHhB0ZnI8nHMdBWYz_dLcfueFMK_n-7sLOLCvObH_0/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-200 hover:text-neutral-400 cursor-pointer transition-colors font-bold"
          >
            Resume
          </Link> */}
          <Link
            href="/contact"
            className="text-neutral-200 hover:text-neutral-400 cursor-pointer transition-colors font-bold"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-neutral-900">
          <nav className="flex flex-col space-y-2 p-4">
            <Link
              href="/"
              className="text-neutral-200 hover:text-neutral-400 cursor-pointer transition-colors font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-neutral-200 hover:text-neutral-400 cursor-pointer transition-colors font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            {/* <Link
              href="https://docs.google.com/document/d/1ruHhB0ZnI8nHMdBWYz_dLcfueFMK_n-7sLOLCvObH_0/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-200 hover:text-neutral-400 cursor-pointer transition-colors font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </Link> */}
            <Link
              href="/contact"
              className="text-neutral-200 hover:text-neutral-400 cursor-pointer transition-colors font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
