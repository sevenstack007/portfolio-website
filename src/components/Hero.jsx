"use client";

import { motion } from "framer-motion";

export default function Hero({ onQuoteClick }) {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 md:pt-32"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
      >
        Digital Solutions That <br />
        <span className="text-indigo-600 dark:text-indigo-400">
          Empower Your Business
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-lg md:text-xl max-w-2xl text-gray-600 dark:text-gray-300 mb-8"
      >
        We design and develop innovative digital experiences that help your brand
        grow, engage, and lead in the digital era.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <button
          onClick={onQuoteClick}
          className="bg-indigo-600 text-white px-8 py-3 rounded-xl text-lg font-medium hover:bg-indigo-500 transition"
        >
          Request a Quote
        </button>
        <a
          href="#services"
          className="border border-gray-400 dark:border-gray-600 px-8 py-3 rounded-xl text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          View Services
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-16"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
          alt="Team working together"
          className="rounded-2xl shadow-lg w-full max-w-4xl"
        />
      </motion.div>
    </section>
  );
}
