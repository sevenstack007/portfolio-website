"use client";

import { motion } from "framer-motion";

const members = [
  {
    name: "Ava Mitchell",
    role: "CEO & Founder",
    img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Ethan Brooks",
    role: "Lead Developer",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Luna Carter",
    role: "Creative Director",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white dark:bg-gray-950 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Meet Our Team
      </motion.h2>

      <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {members.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-md transition p-6 text-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-500 dark:text-gray-400">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
