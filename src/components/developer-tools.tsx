"use client"

import { motion } from "framer-motion"
import { Code2, Zap, Server, Eye } from "lucide-react"

export function DeveloperTools() {
  const tools = [
    {
      icon: Code2,
      label: "Aleo SDK",
      desc: "JavaScript/TypeScript SDK for integrating Aleo into web applications. Build wallets, dApps, and services with familiar tools.",
      hoverClass: "aleo-pink-hover",
    },
    {
      icon: Zap,
      label: "Leo Playground",
      desc: "Browser-based IDE for writing, testing, and deploying Leo programs without any local setup required.",
      hoverClass: "aleo-mint-hover",
    },
    {
      icon: Server,
      label: "snarkOS",
      desc: "Full node implementation for running validators, miners, and participating in network consensus.",
      hoverClass: "aleo-yellow-hover",
    },
    {
      icon: Eye,
      label: "Aleo Explorer",
      desc: "Block explorer for monitoring transactions, programs, and network activity in real-time.",
      hoverClass: "aleo-coral-hover",
    },
  ]

  return (
    <section className="relative min-w-full h-screen flex items-center justify-center px-6 snap-section bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-balance text-black dark:text-white">
            Developer Tools &{" "}
            <span className="text-black dark:text-white underline decoration-[var(--aleo-coral)] decoration-4">
              Ecosystem.
            </span>
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
            <p>Aleo provides a comprehensive suite of tools to streamline your development workflow:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className={`group relative p-8 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-black dark:hover:border-white transition-all cursor-pointer ${tool.hoverClass}`}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:bg-transparent transition-all duration-300">
                      <tool.icon className="w-6 h-6 text-black dark:text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-black dark:text-white">{tool.label}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {tool.desc}
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
