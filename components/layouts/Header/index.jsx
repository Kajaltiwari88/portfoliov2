"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    setActive(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className="text-xl font-bold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent cursor-pointer"
        >
          Kajal
        </motion.h1>

        <nav className="flex gap-8">
          {navItems?.map((item) => (
            <motion.button
              key={item?.id}
              onClick={() => scrollToSection(item?.id)}
              whileHover={{ scale: 1.1 }}
              className={`relative text-sm uppercase tracking-widest ${
                active === item?.id ? "text-purple-400" : "text-gray-300"
              }`}
            >
              {item?.name}

              {active === item?.id && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-2 w-full h-0.5 bg-purple-500"
                />
              )}
            </motion.button>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
