"use client"

import { motion } from "framer-motion"

export function VisionSection() {
  return (
    <section className="relative min-w-full h-screen flex items-center justify-center px-6 snap-section bg-white dark:bg-black overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => {
          const colors = [
            "var(--aleo-yellow)", 
            "var(--aleo-mint)", 
            "var(--aleo-coral)", 
            "var(--aleo-pink)",
            "var(--aleo-yellow-dark)",
            "var(--aleo-mint-dark)",
            "var(--aleo-coral-dark)",
            "var(--aleo-pink-dark)"
          ];
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: colors[i % colors.length],
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          )})}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-balance text-black dark:text-white">
            A Future Built on{" "}
            <span className="bg-gradient-to-r from-[var(--aleo-coral)] to-[var(--aleo-pink)]  bg-clip-text text-transparent">
              Freedom
            </span>
          </h2>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-700 dark:text-gray-300"
            >
              Privacy is not secrecy — it&apos;s sovereignty.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-black dark:text-white font-medium"
            >
              Aleo envisions a world where individuals own their data, developers control their logic, and applications
              run without surveillance.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-black dark:text-white font-bold text-2xl"
            >
              This isn&apos;t a feature. It&apos;s a fundamental right.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16"
          >
            <div
              className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-[var(--aleo-yellow)] via-[var(--aleo-mint)] to-[var(--aleo-coral)]  bg-clip-text text-transparent"
              style={{ WebkitTextStroke: "1px rgba(0,0,0,0.1)" }}
            >
              ALEO
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
