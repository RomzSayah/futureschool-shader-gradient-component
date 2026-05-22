"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GradientBackground } from "./gradient-background"

const introSequence = [
  "Information is now abundant.",
  "Tools are now powerful.",
  "Anyone can generate.",
  "But not everyone can direct.",
  "Original thinking. Taste. Judgment.",
  "Creative direction.",
  "These are the new skills.",
]

interface CinematicIntroProps {
  onComplete: () => void
}

export function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < introSequence.length) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1)
      }, 2000)
      return () => clearTimeout(timer)
    } else {
      const completeTimer = setTimeout(() => {
        setIsComplete(true)
        setTimeout(onComplete, 600)
      }, 800)
      return () => clearTimeout(completeTimer)
    }
  }, [currentIndex, onComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <GradientBackground />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="relative z-10 max-w-4xl px-8 text-center">
            <AnimatePresence mode="wait">
              {currentIndex < introSequence.length && (
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="font-serif text-3xl leading-relaxed text-white md:text-5xl lg:text-6xl"
                >
                  {introSequence[currentIndex]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          
          <button
            onClick={() => {
              setIsComplete(true)
              setTimeout(onComplete, 100)
            }}
            className="absolute bottom-8 right-8 text-xs uppercase tracking-widest text-white/40 transition-colors hover:text-white/70"
          >
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
