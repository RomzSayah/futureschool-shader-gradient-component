"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const introSequence = [
  "Information is now abundant.",
  "Tools are now powerful.",
  "Anyone can generate.",
  "But not everyone can direct.",
  "Original thinking. Taste. Judgment.",
  "Creative direction.",
  "These are the new skills.",
  "Welcome to The Future School.",
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
      }, 2400)
      return () => clearTimeout(timer)
    } else {
      const completeTimer = setTimeout(() => {
        setIsComplete(true)
        setTimeout(onComplete, 800)
      }, 1000)
      return () => clearTimeout(completeTimer)
    }
  }, [currentIndex, onComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl px-8 text-center">
            <AnimatePresence mode="wait">
              {currentIndex < introSequence.length && (
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="font-serif text-2xl leading-relaxed text-white/90 md:text-4xl"
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
            className="absolute bottom-8 right-8 text-sm text-white/40 transition-colors hover:text-white/60"
          >
            Skip intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
