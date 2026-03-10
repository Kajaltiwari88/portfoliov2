"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-linear-to-t from-black to-[#0f0f1a] text-gray-400 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl font-semibold text-white mb-6"
        >
          Portfolio 🚀
        </motion.h2>

        <div className="flex justify-center gap-8 mb-10">
          {[{"LinkedIn" : "https://www.linkedin.com/in/kajal-indramani-tiwari"}, {"GitHub" : "https://github.com/Kajaltiwari88/"}].map((item) => (
            <motion.a
              key={Object.keys(item)[0]}
              href={item[Object.keys(item)[0]]}
              whileHover={{ scale: 1.2, color: "#a855f7" }}
              className="cursor-pointer"
              target="_blank"
            >
              {Object.keys(item)[0]}
            </motion.a>
          ))}
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Kajal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
