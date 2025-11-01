"use client";

export default function Footer() {
  return (
    <footer className="py-10 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
      <p>© {new Date().getFullYear()} BrightMind Studio. All rights reserved.</p>
      <div className="mt-4 space-x-4">
        <a href="#hero" className="hover:text-indigo-500">Home</a>
        <a href="#services" className="hover:text-indigo-500">Services</a>
        <a href="#cases" className="hover:text-indigo-500">Case Studies</a>
        <a href="#team" className="hover:text-indigo-500">Team</a>
      </div>
    </footer>
  );
}
