"use client"

import { motion } from "framer-motion"

export function AleoLogo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.03 }}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none"
    >
      <svg
        width="300"
        height="300"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-black md:w-[500px] md:h-[500px]"
      >
        <motion.path
          d="M100 20L180 180H20L100 20Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.circle
          cx="100"
          cy="100"
          r="60"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          initial={{ scale: 0.8, opacity: 0.3 }}
          animate={{ scale: 1.2, opacity: 0 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeOut" }}
        />
      </svg>
    </motion.div>
  )
}
