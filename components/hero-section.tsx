"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { GradientBackground } from "./gradient-background"

const allLines = [
  // Opening - the shift
  "Information is now abundant.",
  "Tools are now powerful.",
  "Anyone can generate.",
  "But not everyone can direct.",
  
  // The question
  "If AI can solve the world's toughest challenges,",
  "what is left for humans?",
  
  // The answer
  "We believe the answer is clear.",
  "Creativity is the new currency.",
  
  // The philosophy
  "Instead of fearing what AI will take,",
  "we come back to what is truly human.",
  "Consciousness.",
  "Creativity.",
  "Connection.",
  "Soul.",
  
  // The vision
  "We imagine a world where AI handles the complex,",
  "while humans have time for creative exploration.",
  "For pursuing inner interests.",
  "For creating from the soul.",
  
  // The opportunity
  "This is an exciting time.",
  "We have the chance to make space",
  "for what makes us really us.",
  
  // The tension
  "AI is powerful.",
  "Capable of boosting our intelligence and creativity",
  "in ways we could not imagine before.",
  
  // The key
  "But to dig deeper into our creative abilities,",
  "we must learn to listen to ourselves.",
  "And be creative in our use of AI.",
  
  // The mission
  "We are not here to produce more content.",
  "We train the next generation",
  "of creative directors of machines.",
  
  // The purpose
  "We exist to fight the slop.",
  "To help humans become more original,",
  "more imaginative,",
  "and more alive.",
  
  // The name
  "This is The Future School.",
]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const titleOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0])
  const titleY = useTransform(scrollYProgress, [0, 0.08], [0, -100])

  return (
    <section ref={containerRef} className="relative">
      {/* Fixed gradient background for the entire sequence */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <GradientBackground />
        
        {/* Title - fades out as you scroll */}
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6"
        >
          <h1 className="font-serif text-[15vw] leading-[0.85] tracking-tight text-white md:text-[12vw] lg:text-[10vw]">
            <span className="block">The Future</span>
            <span className="block italic text-white/90">School</span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-3 text-white/40"
            >
              <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* All text lines - appear sequentially as you scroll */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
          {allLines.map((line, index) => {
            const segmentSize = 0.88 / allLines.length
            const start = 0.06 + index * segmentSize
            const end = start + segmentSize * 0.75
            
            return (
              <ScrollLine
                key={index}
                line={line}
                scrollYProgress={scrollYProgress}
                start={start}
                end={end}
              />
            )
          })}
        </div>
      </div>
      
      {/* Spacer for scroll height */}
      <div className="h-[1200vh]" />
    </section>
  )
}

function ScrollLine({
  line,
  scrollYProgress,
  start,
  end,
}: {
  line: string
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"]
  start: number
  end: number
}) {
  const opacity = useTransform(
    scrollYProgress,
    [start - 0.01, start, end, end + 0.01],
    [0, 1, 1, 0]
  )
  const y = useTransform(
    scrollYProgress,
    [start - 0.01, start, end, end + 0.01],
    [60, 0, 0, -60]
  )
  const scale = useTransform(
    scrollYProgress,
    [start - 0.01, start, end, end + 0.01],
    [0.9, 1, 1, 0.9]
  )

  return (
    <motion.p
      style={{ 
        opacity, 
        y,
        scale,
        position: "absolute",
      }}
      className="max-w-5xl text-center font-serif text-4xl leading-tight text-white md:text-6xl lg:text-7xl"
    >
      {line}
    </motion.p>
  )
}
