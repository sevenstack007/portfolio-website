"use client";

import { motion } from "framer-motion";

const clients = [
  "Google", "Microsoft", "Spotify", "Netflix", "Airbnb", "Amazon"
];

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-gray-50 dark:bg-gray-900 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-8"
      >
        Trusted by Leading Brands
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-5xl mx-auto items-center text-center">
        {clients.map((client, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-xl font-semibold text-gray-500 dark:text-gray-300"
          >
            {client}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
