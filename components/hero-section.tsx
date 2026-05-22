"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { GradientBackground } from "./gradient-background"

const textSequence = [
  // Opening - the shift
  "Information is now abundant.",
  "Tools are now powerful.",
  "Anyone can generate.",
  "But not everyone can direct.",
  
  // The question
  "If AI can solve the world's toughest challenges, what is left for humans?",
  
  // The answer
  "We believe the answer is clear.",
  "Creativity is the new currency.",
  
  // The philosophy
  "Instead of fearing what AI will take, we come back to what is truly human.",
  "Consciousness. Creativity. Connection. Soul.",
  
  // The vision
  "We imagine a world where AI handles the complex, while humans have time for creative exploration.",
  
  // The mission
  "We are not here to produce more content.",
  "We train the next generation of creative directors of machines.",
  
  // The purpose
  "We exist to fight the slop.",
  "To help humans become more original, more imaginative, and more alive.",
  
  // The name
  "This is The Future School.",
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(-1) // -1 = showing title
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Show title for 2 seconds, then start text sequence
    const initialDelay = setTimeout(() => {
      setCurrentIndex(0)
    }, 2000)

    return () => clearTimeout(initialDelay)
  }, [])

  useEffect(() => {
    if (currentIndex >= 0 && currentIndex < textSequence.length) {
      const timer = setTimeout(() => {
        if (currentIndex < textSequence.length - 1) {
          setCurrentIndex(currentIndex + 1)
        } else {
          // Sequence complete, wait a moment then allow scroll
          setTimeout(() => setIsComplete(true), 2000)
        }
      }, 2500) // Each line stays for 2.5 seconds

      return () => clearTimeout(timer)
    }
  }, [currentIndex])

  return (
    <section className="relative min-h-screen">
      {/* Gradient background - now part of the section flow */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <GradientBackground />
        
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
          <AnimatePresence mode="wait">
            {currentIndex === -1 && (
              <motion.div
                key="title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center"
              >
                <h1 className="font-serif text-[15vw] leading-[0.85] tracking-tight text-white md:text-[12vw] lg:text-[10vw]">
                  <span className="block">The Future</span>
                  <span className="block italic text-white/90">School</span>
                </h1>
              </motion.div>
            )}
            
            {currentIndex >= 0 && currentIndex < textSequence.length && (
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-4xl text-center font-serif text-3xl leading-snug text-white sm:text-4xl md:text-5xl lg:text-6xl"
              >
                {textSequence[currentIndex]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Scroll indicator - only shows after sequence */}
        <AnimatePresence>
          {isComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-3 text-white/40"
              >
                <span className="text-xs uppercase tracking-[0.3em]">Continue</span>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
