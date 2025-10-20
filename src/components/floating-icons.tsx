"use client"

import { motion } from "framer-motion"

const floatingIcons = [
  { id: 1, icon: "🔐", label: "Lock" },
  { id: 2, icon: "🔒", label: "Locked" },
  { id: 3, icon: "🛡️", label: "Shield" },
  { id: 4, icon: "⚡", label: "Lightning" },
  { id: 5, icon: "🔑", label: "Key" },
  { id: 6, icon: "✓", label: "Check" },
  { id: 7, icon: "◆", label: "Diamond" },
  { id: 8, icon: "∞", label: "Infinity" },
  { id: 9, icon: "◇", label: "Gem" },
  { id: 10, icon: "★", label: "Star" },
]

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingIcons.map((item) => {
        const randomX = Math.random() * 100
        const randomY = Math.random() * 100
        const randomDuration = 20 + Math.random() * 20
        const randomDelay = Math.random() * 5

        return (
          <motion.div
            key={item.id}
            className="absolute text-xl opacity-20 dark:opacity-15"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 40 - 20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: randomDuration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: randomDelay,
            }}
          >
            {item.icon}
          </motion.div>
        )
      })}
    </div>
  )
}
