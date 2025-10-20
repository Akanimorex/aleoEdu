"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function JoinSection() {
  const links = [
    { label: "Start Building", url: "https://docs.aleo.org", color: "var(--aleo-yellow)" },
    { label: "Learn Leo", url: "https://leo-lang.org", color: "var(--aleo-mint)" },
    { label: "Join Discord", url: "https://discord.gg/aleo", color: "var(--aleo-coral)" },
    { label: "Follow Aleo", url: "https://twitter.com/AleoHQ", color: "var(--aleo-pink)" },
  ]

  return (
    <section className="relative min-w-full h-screen flex items-center justify-center px-6 snap-section bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-balance text-black dark:text-white">
            Build. Learn.{" "}
            <span className="text-black dark:text-white underline decoration-[var(--aleo-yellow)] dark:decoration-[var(--aleo-yellow-dark)] decoration-4">Contribute.</span>
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
            <p>Aleo is open, permissionless, and community-driven.</p>
            <p className="text-black dark:text-white font-semibold">
              Whether you&apos;re a developer, creator, or advocate — there&apos;s a place for you here.
            </p>
            <p className="text-black dark:text-white font-bold">Ready to start?</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-black dark:bg-white text-white dark:text-black hover:text-black dark:hover:text-white transition-all duration-300 border-2 border-black dark:border-white font-semibold"
                  style={{
                    ["--hover-bg" as string]: link.color,
                  }}
                  onMouseEnter={(e: { currentTarget: { style: { backgroundColor: string; color: string } } }) => {
                    e.currentTarget.style.backgroundColor = link.color
                    e.currentTarget.style.color = "black"
                  }}
                  onMouseLeave={(e: { currentTarget: { style: { backgroundColor: string; color: string } } }) => {
                    e.currentTarget.style.backgroundColor = ""
                    e.currentTarget.style.color = ""
                  }}
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="gap-2">
                    {link.label}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="pt-12 border-t-2 border-gray-200 dark:border-gray-800"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Made by <span className="text-black dark:text-white font-bold">Rex</span> | Aleo Ambassador
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">Powered by Aleo</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
