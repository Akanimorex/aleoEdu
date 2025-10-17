"use client"

import { motion } from "framer-motion"

export function BuildingSection() {
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
            Meet <span className="font-mono bg-[var(--aleo-coral)] px-4 py-1 rounded">Leo</span> — the Language of
            Privacy
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
            <p>Leo is Aleo's domain-specific programming language for writing private applications.</p>
            <p className="text-black font-semibold">It looks like Rust. It feels like magic.</p>
            <p>With Leo, developers can build apps that prove correctness — without revealing data.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div
              className="rounded-lg border-2 border-gray-200 bg-white p-8 overflow-hidden hover:border-black transition-all duration-300"
              style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.05)" }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-mono text-gray-600 font-semibold">example.leo</span>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--aleo-coral)" }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--aleo-yellow)" }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--aleo-mint)" }} />
                </div>
              </div>

              <pre className="font-mono text-sm md:text-base leading-relaxed">
                <code>
                  <span className="text-purple-600 font-semibold">function</span>{" "}
                  <span className="text-blue-600">main</span>
                  <span className="text-gray-600">(</span>
                  <span className="text-purple-600 font-semibold">private</span> <span className="text-black">a</span>
                  <span className="text-gray-600">:</span> <span className="text-blue-600">u32</span>
                  <span className="text-gray-600">,</span>{" "}
                  <span className="text-purple-600 font-semibold">private</span> <span className="text-black">b</span>
                  <span className="text-gray-600">:</span> <span className="text-blue-600">u32</span>
                  <span className="text-gray-600">)</span> <span className="text-gray-600">-&gt;</span>{" "}
                  <span className="text-blue-600">u32</span> <span className="text-gray-600">{"{"}</span>
                  {"\n"}
                  {"    "}
                  <span className="text-purple-600 font-semibold">return</span> <span className="text-black">a</span>{" "}
                  <span className="text-gray-600">+</span> <span className="text-black">b</span>
                  <span className="text-gray-600">;</span>
                  {"\n"}
                  <span className="text-gray-600">{"}"}</span>
                </code>
              </pre>

              <motion.div
                className="inline-block w-2 h-5 ml-1"
                style={{ backgroundColor: "var(--aleo-mint)" }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
