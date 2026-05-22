"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { GradientBackground } from "./gradient-background"

const introLines = [
  "Information is now abundant.",
  "Tools are now powerful.",
  "Anyone can generate.",
  "But not everyone can direct.",
  "Original thinking. Taste. Judgment.",
  "Creative direction.",
  "These are the new skills.",
]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const titleY = useTransform(scrollYProgress, [0, 0.15], [0, -100])

  return (
    <section ref={containerRef} className="relative">
      {/* Fixed gradient background for the entire hero sequence */}
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

        {/* Intro text lines - appear sequentially as you scroll */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            {introLines.map((line, index) => {
              const start = 0.12 + index * 0.1
              const end = start + 0.08
              
              return (
                <IntroLine
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
      </div>
      
      {/* Spacer for scroll height */}
      <div className="h-[300vh]" />
    </section>
  )
}

function IntroLine({
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
    [start - 0.02, start, end, end + 0.02],
    [0, 1, 1, 0]
  )
  const y = useTransform(
    scrollYProgress,
    [start - 0.02, start, end, end + 0.02],
    [40, 0, 0, -40]
  )
  const blur = useTransform(
    scrollYProgress,
    [start - 0.02, start, end, end + 0.02],
    [10, 0, 0, 10]
  )

  return (
    <motion.p
      style={{ 
        opacity, 
        y,
        filter: useTransform(blur, (v) => `blur(${v}px)`),
        position: "absolute",
        left: 0,
        right: 0,
      }}
      className="font-serif text-3xl leading-relaxed text-white md:text-5xl lg:text-6xl"
    >
      {line}
    </motion.p>
  )
}
