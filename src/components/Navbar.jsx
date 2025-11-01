"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "../utils/ThemeToggle";

export default function Navbar({ onQuoteClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all ${sticky ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm" : ""}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">BrightMind</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#services">Services</a>
          <a href="#cases">Case Studies</a>
          <a href="#clients">Clients</a>
          <a href="#team">Team</a>
          <button onClick={onQuoteClick} className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-500 transition">
            Request Quote
          </button>
          <ThemeToggle />
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
          ☰
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-6 py-4 space-y-4">
          <a href="#services">Services</a>
          <a href="#cases">Case Studies</a>
          <a href="#clients">Clients</a>
          <a href="#team">Team</a>
          <button onClick={onQuoteClick} className="block w-full bg-indigo-600 text-white px-4 py-2 rounded-xl">
            Request Quote
          </button>
          <ThemeToggle />
        </div>
      )}
    </header>
  );
}
