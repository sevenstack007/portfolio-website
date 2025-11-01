"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "E-Commerce Revamp",
    img: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=1200&q=80",
    desc: "Redesigned a global retail brand's online store, increasing conversions by 40%.",
  },
  {
    title: "FinTech Dashboard",
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1200&q=80",
    desc: "Developed a scalable dashboard for a fintech startup handling millions of transactions.",
  },
  {
    title: "Healthcare Platform",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    desc: "Built a HIPAA-compliant telemedicine app for secure online consultations.",
  },
];

export default function CaseStudies() {
  return (
    <section id="cases" className="py-24 bg-white dark:bg-gray-950 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-4"
      >
        Case Studies
      </motion.h2>

      <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Explore some of our favorite projects and how we helped clients achieve measurable results.
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        spaceBetween={30}
        slidesPerView={1}
        loop
        className="max-w-6xl mx-auto"
      >
        {projects.map((project, i) => (
          <SwiperSlide key={i}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-900"
            >
              <img src={project.img} alt={project.title} className="w-full h-80 object-cover" />
              <div className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.desc}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
