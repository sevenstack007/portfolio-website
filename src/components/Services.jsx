"use client";

import { motion } from "framer-motion";
import { Code, Palette, Smartphone, LineChart } from "lucide-react";

const services = [
  {
    icon: <Code className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />,
    title: "Web Development",
    desc: "Modern, high-performance websites and web apps built with React, Next.js, and TailwindCSS.",
  },
  {
    icon: <Palette className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />,
    title: "UI/UX Design",
    desc: "Clean and intuitive designs that focus on usability, accessibility, and brand storytelling.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />,
    title: "Mobile Solutions",
    desc: "Cross-platform mobile applications using React Native and modern design systems.",
  },
  {
    icon: <LineChart className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />,
    title: "Digital Strategy",
    desc: "Data-driven strategies to help your brand scale effectively across digital channels.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gray-50 dark:bg-gray-900/50 text-center px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-4"
      >
        Our Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
      >
        From concept to execution, we offer end-to-end digital solutions that bring ideas to life.
      </motion.p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center space-y-4">
              {service.icon}
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
