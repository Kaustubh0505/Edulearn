"use client"

import Link from "next/link"
import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 bg-gray-900 text-white shadow-lg relative">
      <div className="text-2xl font-extrabold text-gray-100">
        Edulearn
      </div>

      {/* Mobile Toggle Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-3xl focus:outline-none">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      <div className="hidden md:flex gap-6 text-gray-100 text-lg font-semibold">
        <NavLinks />
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <NavLinks />
        </div>
      )}
    </nav>
  );
}

function NavLinks() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/quiz", label: "Quiz" },
    { href: "/study_timer", label: "Study Timer" },
    { href: "/doubt_solver", label: "Doubt Solver" },
    { href: "/daily_challenge", label: "Daily Challenge" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-100 hover:text-gray-500 transition-colors duration-300"
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}

export default Navbar;
