"use client"

import { motion, useScroll, useSpring, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { GradientBackground } from "./gradient-background"

const textSequence = [
  "Information is now abundant.",
  "Tools are now powerful.",
  "Anyone can generate. But not everyone can direct.",
  "If AI can solve the world's toughest challenges, what is left for humans?",
  "Creativity is the new currency.",
  "Instead of fearing what AI will take, we come back to what is truly human.",
  "Consciousness. Creativity. Connection. Soul.",
  "We are not here to produce more content.",
  "We train the next generation of creative directors of machines.",
  "We exist to fight the slop — to help humans become more original, more imaginative, and more alive.",
]

// Each line gets: typing time + hold time. We model this in "units".
// Typing units = number of characters. Hold units = a constant per line.
const HOLD_UNITS = 18 // characters worth of "hold" time after a line finishes typing
const lineUnits = textSequence.map((l) => l.length + HOLD_UNITS)
const totalUnits = lineUnits.reduce((a, b) => a + b, 0)

function TypewriterLine({
  scrollYProgress,
}: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"]
}) {
  // Smooth scroll into a flowing progress value
  const smoothed = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 22,
    mass: 0.5,
  })

  // Map 0.04 -> 0.94 of scroll across all units
  const progress = useTransform(smoothed, [0.04, 0.94], [0, totalUnits])

  const [units, setUnits] = useState(0)
  useMotionValueEvent(progress, "change", (latest) => {
    setUnits(Math.max(0, latest))
  })

  // Figure out which line we're on, and how many chars are typed within it
  let consumed = 0
  let activeIndex = 0
  let charsInLine = 0
  let isHolding = false

  for (let i = 0; i < textSequence.length; i++) {
    const lineLen = textSequence[i].length
    const lineTotal = lineUnits[i]
    if (units < consumed + lineTotal) {
      activeIndex = i
      const within = units - consumed
      charsInLine = Math.min(lineLen, Math.floor(within))
      isHolding = within >= lineLen
      break
    }
    consumed += lineTotal
    // Past the end: lock to the last line, fully typed
    if (i === textSequence.length - 1) {
      activeIndex = i
      charsInLine = lineLen
      isHolding = true
    }
  }

  const activeLine = textSequence[activeIndex]
  const visibleText = activeLine.slice(0, charsInLine)
  const showCursor = !isHolding || charsInLine < activeLine.length

  return (
    <div className="mx-auto flex h-full max-w-4xl items-center px-6 md:px-12">
      <div className="w-full">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeIndex}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-2xl leading-snug text-white text-balance text-left sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          >
            {visibleText}
            {showCursor && (
              <span className="ml-1 inline-block h-[0.9em] w-[2px] -mb-1 animate-pulse bg-white align-middle" />
            )}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  )
}

export function HeroSection() {
  const typewriterRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: typewriterRef,
    offset: ["start start", "end end"],
  })

  return (
    <>
      {/* First screen: title only. Scroll past it like a normal section. */}
      <section className="relative h-screen w-full overflow-hidden">
        <GradientBackground />
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
          <h1 className="text-center font-serif leading-[0.85] tracking-tight text-white">
            <span className="block text-[15vw] md:text-[12vw] lg:text-[10vw]">The Future</span>
            <span className="block text-[15vw] italic text-white/90 md:text-[12vw] lg:text-[10vw]">
              School
            </span>
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/60"
          >
            Scroll
          </motion.div>
        </div>
      </section>

      {/* Sticky typewriter: one line at a time, fades in/out, types as you scroll. */}
      <section ref={typewriterRef} className="relative h-[600vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <GradientBackground />
          <div className="absolute inset-0 z-10">
            <TypewriterLine scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </section>
    </>
  )
}
