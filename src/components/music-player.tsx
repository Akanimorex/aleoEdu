"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"

export function MusicPlayer() {
  const playlist = [
    { title: "Lofi Chill 1", src: "/audio/good-night-lofi-cozy-chill-music.mp3" },
    { title: "Night Vibes", src: "/audio/cutie-japan-lofi.mp3" },
    { title: "Study Flow", src: "/audio/lofi-piano-beat.mp3" },
    { title: "Spirit Blossom", src: "/audio/spirit-blossom.mp3" },
  ]

  const [currentTrack, setCurrentTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false) // start paused
  const [volume, setVolume] = useState(0.4)
  const [isMuted, setIsMuted] = useState(false)
  const [showVolumeSlider, setShowVolumeSlider] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  // 🔹 Apply volume dynamically
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [isMuted, volume])

  // 🔹 Handle play/pause with browser-safe autoplay logic
  const togglePlay = async () => {
    if (!audioRef.current) return

    try {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        await audioRef.current.play()
        setIsPlaying(true)
      }
    } catch (err) {
      console.warn("Playback blocked:", err)
      setIsPlaying(false)
    }
  }

  // 🔹 Handle mute toggle
  const toggleMute = () => setIsMuted((prev) => !prev)

  // 🔹 Volume range handler
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
    if (newVolume > 0) setIsMuted(false)
  }

  // 🔹 Auto-play next track
  const handleEnded = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length)
  }

  // 🔹 When track changes, auto-play if already playing
  useEffect(() => {
    if (!audioRef.current) return
    audioRef.current.src = playlist[currentTrack].src

    if (isPlaying) {
      audioRef.current.play().catch(() => {
        console.warn("Autoplay prevented — waiting for user gesture")
        setIsPlaying(false)
      })
    }
  }, [currentTrack])

  const barVariants = {
    playing: (i: number) => ({
      height: ["8px", "20px", "12px", "24px", "16px"][i % 5],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "mirror" as const,
        delay: i * 0.1,
      },
    }),
    paused: { height: "8px", transition: { duration: 0.3 } },
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={playlist[currentTrack].src}
        preload="auto"
        onEnded={handleEnded}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex items-center gap-2"
        onMouseEnter={() => setShowVolumeSlider(true)}
        onMouseLeave={() => setShowVolumeSlider(false)}
      >
        {/* Volume Slider */}
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

        {/* Mute Button */}
        <motion.button
          onClick={toggleMute}
          className="hidden md:block p-2.5 md:p-3 bg-white dark:bg-gray-800 border-2 border-black dark:border-white rounded-full hover:bg-[var(--aleo-mint)] transition-all duration-300 shadow-lg"
          whileTap={{ scale: 0.95 }}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 md:w-5 md:h-5 text-black dark:text-white" />
          ) : (
            <Volume2 className="w-4 h-4 md:w-5 md:h-5 text-black dark:text-white" />
          )}
        </motion.button>

        {/* Main Play Button */}
        <motion.button
          onClick={togglePlay}
          className="w-16 h-16 md:w-20 md:h-20 bg-white dark:bg-gray-800 border-2 border-black dark:border-white rounded-full hover:bg-[var(--aleo-yellow)] transition-all duration-300 shadow-lg flex items-center justify-center"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
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
