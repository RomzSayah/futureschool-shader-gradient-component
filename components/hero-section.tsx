"use client"

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { useRef, useState } from "react"
import { GradientBackground } from "./gradient-background"

const textSequence = [
  "Information is now abundant.",
  "Tools are now powerful.",
  "Anyone can generate.",
  "But not everyone can direct.",
  "If AI can solve the world's toughest challenges, what is left for humans?",
  "We believe the answer is clear.",
  "Creativity is the new currency.",
  "Instead of fearing what AI will take, we come back to what is truly human.",
  "Consciousness. Creativity. Connection. Soul.",
  "We are not here to produce more content.",
  "We train the next generation of creative directors of machines.",
  "We exist to fight the slop.",
  "To help humans become more original, more imaginative, and more alive.",
  "This is The Future School.",
]

// Build cumulative character index so the typewriter runs continuously across all lines
const totalChars = textSequence.reduce((sum, line) => sum + line.length, 0)

function TypewriterLines({
  scrollYProgress,
}: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"]
}) {
  // Map scroll 0 -> 1 to total characters typed
  const charsTyped = useTransform(scrollYProgress, [0, 1], [0, totalChars])
  const [typed, setTyped] = useState(0)

  useMotionValueEvent(charsTyped, "change", (latest) => {
    setTyped(Math.floor(latest))
  })

  // Determine which line is currently being typed and how many chars per line
  let consumed = 0
  const lineStates = textSequence.map((line) => {
    const start = consumed
    consumed += line.length
    const end = consumed
    const visible = Math.max(0, Math.min(line.length, typed - start))
    const isActive = typed >= start && typed < end
    const isComplete = typed >= end
    return { line, visible, isActive, isComplete }
  })

  // Only render lines that have started; keep completed lines visible above
  return (
    <div className="mx-auto flex h-full max-w-4xl flex-col justify-center px-6 md:px-12">
      <div className="space-y-6 md:space-y-8">
        {lineStates.map((state, index) => {
          if (state.visible === 0) return null
          return (
            <p
              key={index}
              className="font-serif text-2xl leading-snug text-white text-balance sm:text-3xl md:text-4xl lg:text-5xl"
            >
              {state.line.slice(0, state.visible)}
              {state.isActive && (
                <span className="ml-0.5 inline-block h-[0.9em] w-[2px] -mb-1 animate-pulse bg-white align-middle" />
              )}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export function HeroSection() {
  const introRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start start", "end end"],
  })

  return (
    <>
      {/* First screen: just the title, scroll past it like any normal section */}
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

      {/* Second part: sticky typewriter section that runs continuously as you scroll */}
      <section ref={introRef} className="relative h-[500vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <GradientBackground />
          <div className="absolute inset-0 z-10">
            <TypewriterLines scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </section>
    </>
  )
}
