"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 border-t border-gray-200/40 dark:border-gray-700/40 text-gray-700 dark:text-gray-300 pt-16 pb-8 px-6">
      {/* Decorative Gradient Circle */}
      <div className="absolute -top-32 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 text-center md:text-left z-10 relative">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-4">
            SevenStack Studio
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Building digital products that combine creativity, technology, and innovation.
          </p>
          <a
            href="mailto:hello@sevenstack.dev"
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
          >
            <FaEnvelope /> sevenstack007@gmail.com
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-indigo-500">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">About</a></li>
            <li><a href="#services" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Services</a></li>
            <li><a href="#cases" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Projects</a></li>
            <li><a href="#team" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Team</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-indigo-500">Resources</h3>
          <ul className="space-y-2">
            <li><a href="https://github.com/sevenstack" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">GitHub</a></li>
            <li><a href="https://www.linkedin.com/company/sevenstack" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">LinkedIn</a></li>
            <li><a href="https://twitter.com/sevenstack" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Twitter</a></li>
            <li><a href="https://instagram.com/sevenstack" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Instagram</a></li>
            <li><a href="https://sevenstack.dev/privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold mb-4 text-indigo-500">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://github.com/sevenstack007"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-indigo-500 hover:text-white transition-all"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/company/sevenstack"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-indigo-500 hover:text-white transition-all"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://twitter.com/sevenstack"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-indigo-500 hover:text-white transition-all"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://instagram.com/sevenstack"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-indigo-500 hover:text-white transition-all"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-gray-300/40 dark:border-gray-700/60 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">SevenStack Studio</span>.  
          All rights reserved.
        </p>
        <p className="mt-2">
          Designed & Developed with 💜 by <a href="https://github.com/sevenstack007" target="_blank" className="hover:text-indigo-500">SevenStack Dev Team</a>
        </p>
      </div>
    </footer>
  );
}
