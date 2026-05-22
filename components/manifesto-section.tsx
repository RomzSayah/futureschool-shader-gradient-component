"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function ManifestoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const manifestoLines = [
    "We believe creativity is the new currency.",
    "In a world where AI can solve complex problems, humans are free to explore what makes us truly human: consciousness, creativity, connection, and soul.",
    "We are not here to produce more content.",
    "We are here to train the next generation of creative directors of machines.",
    "The Future School exists to fight the slop, and to help humans become more original, more imaginative, and more alive.",
  ]

  return (
    <section id="manifesto" className="relative bg-black py-32 md:py-48" ref={ref}>
      <div className="mx-auto max-w-4xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-sm uppercase tracking-[0.3em] text-white/40"
        >
          Our Manifesto
        </motion.p>

        <div className="space-y-12">
          {manifestoLines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`font-serif text-2xl leading-relaxed md:text-4xl ${
                index === 2 || index === 3 || index === 4
                  ? "text-white"
                  : "text-white/70"
              }`}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 h-px w-full origin-left bg-gradient-to-r from-white/20 to-transparent"
        />
      </div>
    </section>
  )
}
