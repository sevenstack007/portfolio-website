"use client";

import { motion } from "framer-motion";
import { FaBullseye, FaLightbulb, FaUsers } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 px-6 overflow-hidden"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600"
      >
        About Us
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto text-lg leading-relaxed"
      >
        We are a passionate development team committed to transforming ideas into scalable, 
        beautiful, and impactful digital experiences. At <span className="font-semibold text-indigo-600 dark:text-indigo-400">StackSeven Studio</span>, 
        we believe in code that empowers, designs that inspire, and technology that connects.
      </motion.p>

      {/* 3 Feature Cards */}
      <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="p-8 rounded-3xl bg-white/40 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200/40 dark:border-gray-800/60 shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-center"
        >
          <div className="flex justify-center mb-4">
            <FaLightbulb className="text-4xl text-yellow-400" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Our Vision</h3>
          <p className="text-gray-600 dark:text-gray-300">
            To empower businesses and communities through technology, design, and innovation — 
            crafting seamless digital products that leave a lasting impact.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="p-8 rounded-3xl bg-white/40 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200/40 dark:border-gray-800/60 shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-center"
        >
          <div className="flex justify-center mb-4">
            <FaBullseye className="text-4xl text-indigo-500" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Our Mission</h3>
          <p className="text-gray-600 dark:text-gray-300">
            To deliver scalable, secure, and user-friendly software solutions by combining 
            technical excellence with design thinking — turning ideas into successful products.
          </p>
        </motion.div>

        {/* Team Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="p-8 rounded-3xl bg-white/40 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200/40 dark:border-gray-800/60 shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-center"
        >
          <div className="flex justify-center mb-4">
            <FaUsers className="text-4xl text-purple-500" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Our Core Values</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Collaboration, transparency, and integrity are at the heart of everything we do. 
            We grow together — as developers, designers, and innovators building the future.
          </p>
        </motion.div>
      </div>

      {/* Motto */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-center mt-20"
      >
        <p className="text-xl md:text-2xl italic text-gray-700 dark:text-gray-300 font-medium">
          “Expert Code, Delivered with Purpose.”
        </p>
      </motion.div>
    </section>
  );
}
