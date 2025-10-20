"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { BuildingSection } from "@/components/building-section"
import { EcosystemSection } from "@/components/ecosystem-section"
import { VisionSection } from "@/components/vision-section"
import { JoinSection } from "@/components/join-section"
import { QuizSection } from "@/components/quiz-section"
import { SectionIndicator } from "@/components/section-indicator"
import { AleoLogo } from "@/components/aleo-logo"
import { MusicPlayer } from "@/components/music-player"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const sectionWidth = container.clientWidth
      const section = Math.round(scrollLeft / sectionWidth)
      setCurrentSection(section)
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (index: number) => {
    const container = containerRef.current
    if (!container) return

    const sectionWidth = container.clientWidth
    container.scrollTo({
      left: sectionWidth * index,
      behavior: "smooth",
    })
  }

  const goToPrevious = () => {
    if (currentSection > 0) {
      scrollToSection(currentSection - 1)
    }
  }

  const goToNext = () => {
    if (currentSection < 7) {
      scrollToSection(currentSection + 1)
    }
  }

  return (
    <main className="relative bg-white h-screen overflow-hidden">
      {/* Floating Aleo Logo Watermark */}
      <AleoLogo />

      <SectionIndicator current={currentSection + 1} total={8} />
      <ThemeToggle />

      <MusicPlayer />

      {currentSection > 0 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={goToPrevious}
          className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 rounded-full bg-black text-white hover:bg-[var(--aleo-yellow)] hover:text-black transition-all duration-300 shadow-lg"
          aria-label="Previous section"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>
      )}

      {currentSection < 7 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={goToNext}
          className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 rounded-full bg-black text-white hover:bg-[var(--aleo-yellow)] hover:text-black transition-all duration-300 shadow-lg"
          aria-label="Next section"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>
      )}

      <div
        ref={containerRef}
        className="flex h-full overflow-x-auto overflow-y-hidden book-container touch-pan-x"
        style={{
          perspective: "2000px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BuildingSection />
        <EcosystemSection />
        <VisionSection />
        <JoinSection />
        <QuizSection />
      </div>
    </main>
  )
}
