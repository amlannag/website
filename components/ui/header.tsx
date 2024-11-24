import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full fixed top-0 left-0 flex justify-end p-4 z-50">
      <nav className="flex space-x-6">
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
        <Link
          href="https://docs.google.com/document/d/1ruHhB0ZnI8nHMdBWYz_dLcfueFMK_n-7sLOLCvObH_0/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-200 hover:text-neutral-400 cursor-pointer transition-colors font-bold"
        >
          Resume
        </Link>
        <Link
          href="/contact"
          className="text-neutral-200 hover:text-neutral-400 cursor-pointer transition-colors font-bold"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;