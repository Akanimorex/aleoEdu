"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [volume, setVolume] = useState(0.3)
  const [isMuted, setIsMuted] = useState(false)
  const [showVolumeSlider, setShowVolumeSlider] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
      audioRef.current.play().catch(() => {
        // Browser may block autoplay, that's okay
        setIsPlaying(false)
      })
    }
  }, [isMuted, volume])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
    if (newVolume > 0) {
      setIsMuted(false)
    }
  }

  const barVariants = {
    playing: (i: number) => ({
      height: ["8px", "20px", "12px", "24px", "16px"][i % 5],
      transition: {
        duration: 0.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "mirror" as const,
        delay: i * 0.1,
      },
    }),
    paused: {
      height: "8px",
      transition: { duration: 0.3 },
    },
  }

  return (
    <>
      <audio ref={audioRef} loop src="/audio/good-night-lofi-cozy-chill-music.mp3" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex items-center gap-2"
        onMouseEnter={() => setShowVolumeSlider(true)}
        onMouseLeave={() => setShowVolumeSlider(false)}
      >
        <AnimatePresence>
          {showVolumeSlider && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="hidden md:flex items-center gap-2 bg-white dark:bg-gray-800 border-2 border-black dark:border-white rounded-full px-4 py-2 shadow-lg"
            >
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-24 h-1 accent-[var(--aleo-yellow)] cursor-pointer"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={toggleMute}
          className="hidden md:block p-2.5 md:p-3 bg-white dark:bg-gray-800 border-2 border-black dark:border-white rounded-full hover:bg-[var(--aleo-mint)] transition-all duration-300 shadow-lg"
          whileTap={{ scale: 0.95 }}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 md:w-5 md:h-5 text-black dark:text-white" />
          ) : (
            <Volume2 className="w-4 h-4 md:w-5 md:h-5 text-black dark:text-white" />
          )}
        </motion.button>

        <motion.button
          onClick={togglePlay}
          className="w-16 h-16 md:w-20 md:h-20 bg-white dark:bg-gray-800 border-2 border-black dark:border-white rounded-full hover:bg-[var(--aleo-yellow)] transition-all duration-300 shadow-lg flex items-center justify-center"
          whileTap={{ scale: 0.95 }}
           whileHover={{ scale: 1.05 }}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          <div className="flex items-center justify-center gap-1.5 h-8">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                custom={i}
                variants={barVariants}
                animate={isPlaying ? "playing" : "paused"}
                className="w-1 bg-black dark:bg-white rounded-full"
              />
            ))}
          </div>
        </motion.button>
      </motion.div>
    </>
  )
}
