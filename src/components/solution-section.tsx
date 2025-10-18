"use client"

import { motion } from "framer-motion"
import { Zap, Cloud, CheckCircle } from "lucide-react"

export function SolutionSection() {
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
            Privacy, Powered by{" "}
            <span className="bg-gradient-to-r from-[var(--aleo-mint)] to-[var(--aleo-yellow)] bg-clip-text text-transparent">
              Zero-Knowledge
            </span>
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed mb-16">
            <p>Aleo runs private applications directly in your browser — powered by zero-knowledge proofs (ZKPs).</p>
            <p className="text-black font-semibold">Computation happens off-chain, verification happens on-chain.</p>
            <p>It&apos;s a system that&apos;s efficient, scalable, and truly private by design.</p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Cloud,
                  label: "Off-Chain Computation",
                  desc: "Private execution in browser",
                  color: "var(--aleo-pink)",
                  hoverBg: "#FFE2FC",
                },
                {
                  icon: Zap,
                  label: "Zero-Knowledge Proof",
                  desc: "Cryptographic verification",
                  color: "var(--aleo-yellow)",
                  hoverBg: "#FFE092",
                },
                {
                  icon: CheckCircle,
                  label: "On-Chain Verification",
                  desc: "Trustless validation",
                  color: "var(--aleo-mint)",
                  hoverBg: "#FFA978",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
                  className="relative"
                >
                  <div
                    className="p-8 rounded-lg border-2 border-gray-200 bg-white hover:border-black transition-all duration-300 text-center group cursor-pointer"
                    style={{
                      ["--hover-bg" as string]: item.hoverBg,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = item.hoverBg
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "white"
                    }}
                  >
                    <div className="flex justify-center mb-4">
                      <div
                        className="p-4 rounded-full transition-all duration-300"
                        style={{ backgroundColor: `${item.color}40` }}
                      >
                        <item.icon className="w-8 h-8 text-black" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-black">{item.label}</h3>
                    <p className="text-sm text-gray-600 group-hover:text-black transition-colors">{item.desc}</p>
                  </div>

                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-black/20">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-black/20 rotate-45" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
