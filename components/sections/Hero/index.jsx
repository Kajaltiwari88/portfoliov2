"use client";

import { motion } from "framer-motion";
import Scene from "@/components/three/Scene";

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-[radial-gradient(ellipse_at_top,#1e1b4b,#000000)] text-white overflow-hidden">
      <div className="absolute inset-0">
        <Scene />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-bold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Kajal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-xl text-gray-300"
        >
          Creative Frontend Developer
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-300 shadow-lg shadow-purple-800/50"
        >
          View My Work
        </motion.button>
      </div>
    </section>
  );
}
