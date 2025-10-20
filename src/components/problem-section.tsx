"use client"

import { motion } from "framer-motion"
import { Shield, Eye, Lock } from "lucide-react"

export function ProblemSection() {
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
            The <span className="text-black dark:text-white underline decoration-[var(--aleo-coral)] dark:decoration-[var(--aleo-coral-dark)] decoration-4">Transparency</span>{" "}
            Trap
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
            <p>
              Blockchains gave us decentralization, but they also exposed every transaction, balance, and contract
              call.
            </p>
            <p>
              Transparency was a feature. <span className="text-black dark:text-white font-semibold">Until it became a bug.</span>
            </p>
            <p>Users deserve privacy. Developers deserve freedom.</p>
            <p className="text-black dark:text-white font-bold">That&apos;s the problem Aleo was built to solve.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Eye, label: "Public Transactions", desc: "Every move tracked", color: "aleo-yellow" },
              { icon: Lock, label: "Exposed Balances", desc: "No financial privacy", color: "aleo-mint" },
              { icon: Shield, label: "Visible Logic", desc: "Contract calls revealed", color: "aleo-coral" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                className={`relative p-6 rounded-lg border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-black dark:hover:border-white transition-all duration-300 ${item.color}-hover group cursor-pointer`}
              >
                <item.icon className="w-8 h-8 text-black dark:text-white mb-4 relative z-10" />
                <h3 className="text-lg font-semibold mb-2 relative z-10 text-black dark:text-white">{item.label}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 relative z-10 group-hover:text-black dark:group-hover:text-white transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
