"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
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
  "We imagine a world where AI handles the complex, while humans have time for creative exploration.",
  "We are not here to produce more content.",
  "We train the next generation of creative directors of machines.",
  "We exist to fight the slop.",
  "To help humans become more original, more imaginative, and more alive.",
  "This is The Future School.",
]

function ScrollText({ 
  text, 
  scrollYProgress, 
  index, 
  total 
}: { 
  text: string
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"]
  index: number
  total: number
}) {
  const segmentSize = 0.9 / total
  const start = 0.05 + index * segmentSize
  const fadeInEnd = start + segmentSize * 0.2
  const fadeOutStart = start + segmentSize * 0.7
  const end = start + segmentSize
  
  const opacity = useTransform(
    scrollYProgress,
    [start, fadeInEnd, fadeOutStart, end],
    [0, 1, 1, 0]
  )
  
  const y = useTransform(
    scrollYProgress,
    [start, fadeInEnd, fadeOutStart, end],
    [60, 0, 0, -60]
  )

  return (
    <motion.p
      style={{ opacity, y }}
      className="absolute max-w-4xl text-center font-serif text-3xl leading-snug text-white sm:text-4xl md:text-5xl lg:text-6xl"
    >
      {text}
    </motion.p>
  )
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const titleOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0])
  const titleY = useTransform(scrollYProgress, [0, 0.04], [0, -60])

  return (
    <section ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <GradientBackground />
        
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
          {/* Title */}
          <motion.div
            style={{ opacity: titleOpacity, y: titleY }}
            className="absolute text-center"
          >
            <h1 className="font-serif text-[15vw] leading-[0.85] tracking-tight text-white md:text-[12vw] lg:text-[10vw]">
              <span className="block">The Future</span>
              <span className="block italic text-white/90">School</span>
            </h1>
          </motion.div>
          
          {/* Text sequence */}
          {textSequence.map((text, index) => (
            <ScrollText
              key={index}
              text={text}
              scrollYProgress={scrollYProgress}
              index={index}
              total={textSequence.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
