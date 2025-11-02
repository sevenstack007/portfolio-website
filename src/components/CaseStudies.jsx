// "use client";

// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const projects = [
//   {
//     title: "Venue-Vista",
//     img: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=1200&q=80",
//     desc: "Redesigned a global retail brand's online store, increasing conversions by 40%.",
//   },
//   {
//     title: "FinTech Dashboard",
//     img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1200&q=80",
//     desc: "Developed a scalable dashboard for a fintech startup handling millions of transactions.",
//   },
//   {
//     title: "Healthcare Platform",
//     img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
//     desc: "Built a HIPAA-compliant telemedicine app for secure online consultations.",
//   },
// ];

// export default function CaseStudies() {
//   return (
//     <section id="cases" className="py-24 bg-white dark:bg-gray-950 px-6">
//       <motion.h2
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl font-bold text-center mb-4"
//       >
//         Case Studies
//       </motion.h2>

//       <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
//         Explore some of our favorite projects and how we helped clients achieve measurable results.
//       </p>

//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 4000 }}
//         spaceBetween={30}
//         slidesPerView={1}
//         loop
//         className="max-w-6xl mx-auto"
//       >
//         {projects.map((project, i) => (
//           <SwiperSlide key={i}>
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="rounded-2xl overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-900"
//             >
//               <img src={project.img} alt={project.title} className="w-full h-80 object-cover" />
//               <div className="p-8 text-center">
//                 <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
//                 <p className="text-gray-600 dark:text-gray-300">{project.desc}</p>
//               </div>
//             </motion.div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }






"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "Venue-Vista",
    img: "assets/projects/venue-vista.png",
    desc: "A hall management app built with Flutter for college event scheduling, approvals, and availability tracking.",
    github: "https://github.com/yourusername/venue-vista",
    hosted: "https://venue-vista.vercel.app",
    tech: ["Flutter", "Firebase"],
  },
  {
    title: "Rayat Kutumbh Kalyan Yojna",
    img: "assets/projects/rkky.png",
    desc: "MERN-based welfare portal for tracking schemes and beneficiary analytics with an admin dashboard.",
    github: "https://github.com/yourusername/rayat-kutumbh-yojna",
    hosted: "https://rayatkutumbh.vercel.app",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Attendance Tracker",
    img: "assets/projects/geolocation.png",
    desc: "A Flutter-based location-aware attendance system using geolocation for accurate workforce tracking.",
    github: "https://github.com/yourusername/geo-attendance",
    hosted: "https://attendance-app.web.app",
    tech: ["Flutter", "Google Maps API", "Firebase"],
  },
  {
    title: "CNG Booking System",
    img: "assets/projects/cng.png",
    desc: "Flutter-based app to manage CNG station bookings and workforce, improving operational flow and transparency.",
    github: "https://github.com/yourusername/cng-booking-system",
    hosted: "https://cngbooking.vercel.app",
    tech: ["Flutter", "Dart", "Firebase"],
  },
];

export default function CaseStudies() {
  return (
    <section
      id="cases"
      className="relative py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 px-6 overflow-hidden"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600"
      >
        Featured Projects
      </motion.h2>

      <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto text-lg">
        Explore innovative solutions built across Flutter and MERN stack ecosystems — combining
        design, scalability, and technology.
      </p>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        spaceBetween={50}
        slidesPerView={1}
        loop
        className="max-w-6xl mx-auto"
      >
        {projects.map((project, i) => (
          <SwiperSlide key={i}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => window.open(project.hosted, "_blank")}
              className="relative group rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-gray-100/5 dark:from-gray-800/60 dark:to-gray-900/60 backdrop-blur-lg shadow-2xl cursor-pointer border border-gray-200/30 dark:border-gray-700/40"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-96 object-cover opacity-90 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl font-bold text-white mb-4"
                  >
                    {project.title}
                  </motion.h3>
                  <div className="flex gap-4">
                    <a
                      href={project.hosted}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-500 transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800 text-white px-5 py-2 rounded-full hover:bg-gray-700 transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-10 text-center">
                <h3 className="text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap justify-center gap-3">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-800/30 dark:to-purple-800/30 text-indigo-700 dark:text-indigo-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Glow Border Animation */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-indigo-500/40 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-500" />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
