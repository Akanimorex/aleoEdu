"use client"

import { motion } from "framer-motion"

interface SectionIndicatorProps {
  current: number
  total: number
}

export function SectionIndicator({ current, total }: SectionIndicatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-4 right-4 md:top-8 md:right-8 z-50 font-mono text-xs md:text-sm"
    >
      <div className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border-2 border-black dark:border-white bg-white dark:bg-black backdrop-blur-sm shadow-lg">
        <span className="text-black dark:text-white font-bold">{current}</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-600 dark:text-gray-400">{total}</span>
      </div>
    </motion.div>
  )
}
