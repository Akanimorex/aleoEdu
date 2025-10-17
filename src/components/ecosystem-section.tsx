"use client"

import { motion } from "framer-motion"
import { Coins, User, Gamepad2, Brain } from "lucide-react"

export function EcosystemSection() {
  const projects = [
    { icon: Coins, label: "DeFi", desc: "Private financial protocols", hoverClass: "aleo-pink-hover" },
    { icon: User, label: "Identity", desc: "Sovereign digital identity", hoverClass: "aleo-mint-hover" },
    { icon: Gamepad2, label: "Gaming", desc: "Private game mechanics", hoverClass: "aleo-yellow-hover" },
    { icon: Brain, label: "AI", desc: "Confidential computation", hoverClass: "aleo-coral-hover" },
  ]

  return (
    <section className="relative min-w-full h-screen flex items-center justify-center px-6 snap-section bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-balance text-black">
            Private Apps.{" "}
            <span className="text-black  underline decoration-[var(--aleo-mint)] decoration-4">
              Public Impact.
            </span>
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-gray-700  leading-relaxed mb-16">
            <p>From DeFi protocols to identity tools, from gaming to governance —</p>
            <p className="text-black font-semibold">
              Aleo powers the next generation of privacy-preserving apps.
            </p>
            <p>Explore what's being built on the world's first private compute platform.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className={`group relative p-8 rounded-lg border-2 border-gray-200  bg-white  hover:border-black  transition-all cursor-pointer ${project.hoverClass}`}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gray-100  group-hover:bg-transparent transition-all duration-300">
                      <project.icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-black">{project.label}</h3>
                  </div>
                  <p className="text-gray-600  group-hover:text-black transition-colors">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
