"use client";

import { motion } from "framer-motion";

const members = [
  {
    name: "Badal Lad",
    role: "Executive Director",
    img: "public/assets/team/badal.jpg",
  },
  {
    name: "Prathmesh Jadhav",
    role: "Lead Developer",
    img: "public/assets/team/prathmesh.jpg",
  },
  {
    name: "Sushoban Limbole",
    role: "Lead Developer & Full-Stack Expert",
    img: "public/assets/team/sushoban.jpg",
  },
  {
    name: "Pranav Ghorpade",
    role: "Creative Director & Flutter Developer",
    img: "public/assets/team/pranav.jpg",
  },
  {
    name: "Pavan Mali",
    role: "Marketing Manager",
    img: "public/assets/team/pavan.jpg",
  },
  {
    name: "Vedant Kumbhar",
    role: "Digital Marketer & Mern Developer",
    img: "public/assets/team/",
  },
  {
    name: "Abhijeet Kambale",
    role: "UI/UX & Flutter Developer",
    img: "public/assets/team/",
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
