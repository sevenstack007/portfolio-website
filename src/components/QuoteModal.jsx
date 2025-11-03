// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";

// export default function QuoteModal({ open, onClose }) {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   if (!open) return null;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Thank you, ${form.name}! We'll get in touch soon.`);
//     onClose();
//   };

//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.9, opacity: 0 }}
//             onClick={(e) => e.stopPropagation()}
//             className="bg-white dark:bg-gray-900 rounded-2xl p-8 w-[90%] max-w-md shadow-xl"
//           >
//             <h3 className="text-2xl font-semibold mb-4 text-center">
//               Request a Quote
//             </h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 required
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 bg-transparent"
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 required
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 bg-transparent"
//               />
//               <textarea
//                 placeholder="Tell us about your project..."
//                 required
//                 value={form.message}
//                 onChange={(e) => setForm({ ...form, message: e.target.value })}
//                 className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 bg-transparent h-24"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-500 transition"
//               >
//                 Send Request
//               </button>
//             </form>
//             <button
//               onClick={onClose}
//               className="absolute top-4 right-6 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-2xl"
//             >
//               ✕
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function QuoteModal({ open, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_d1oy7vi",   
        "template_2b8tkv2",     
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "HvWVVMJwpr3nx8fwl"      
      )
      .then(() => {
        alert(`Thank you, ${form.name}! Your request has been sent.`);
        setForm({ name: "", email: "", message: "" });
        setLoading(false);
        onClose();
      })
      .catch((error) => {
        console.error("Email send error:", error);
        alert("Something went wrong. Please try again.");
        setLoading(false);
      });
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 w-[90%] max-w-md shadow-xl relative"
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Request a Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 bg-transparent"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 bg-transparent"
              />
              <textarea
                placeholder="Tell us about your project..."
                required
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 bg-transparent h-24"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-500 transition"
              >
                {loading ? "Sending..." : "Send Request"}
              </button>
            </form>
            <button
              onClick={onClose}
              className="absolute top-4 right-6 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-2xl"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
