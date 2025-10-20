"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { FloatingIcons } from "./floating-icons"

export function HeroSection() {
  return (
    <section className="relative min-w-full h-screen flex items-center justify-center overflow-hidden snap-section bg-white dark:bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <FloatingIcons />

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              width: `${200 + Math.random() * 300}px`,
              height: `${200 + Math.random() * 300}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ["var(--aleo-yellow)", "var(--aleo-mint)", "var(--aleo-coral)", "var(--aleo-pink)"][
                i % 4
              ],
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <motion.p
            className="text-black dark:text-white text-xs md:text-sm font-mono mb-4 md:mb-6 tracking-wider font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            ALEO EXPLAINED
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8 text-balance leading-tight text-black dark:text-white px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            The Private Internet <span className="text-black dark:text-white">Stack</span>
          </motion.h1>

          <motion.div
            className="max-w-3xl mx-auto space-y-3 md:space-y-4 text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p>Every action you take online leaves a trace.</p>
            <p>
              Aleo redefines what it means to compute privately — by combining zero-knowledge proofs with programmable
              logic.
            </p>
            <p className="text-black dark:text-white font-semibold">
              If Ethereum made smart contracts public, Aleo makes them private.
            </p>
            <p className="text-black dark:text-white font-bold">Welcome to the age of private computation.</p>
          </motion.div>

          <motion.div
            className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-3 text-xs md:text-sm font-mono text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: [0, 10, 0] }}
            transition={{ delay: 1.5, x: { repeat: Number.POSITIVE_INFINITY, duration: 2 } }}
          >
            <span className="hidden md:inline">Scroll to explore</span>
            <span className="md:hidden">Swipe to explore</span>
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
