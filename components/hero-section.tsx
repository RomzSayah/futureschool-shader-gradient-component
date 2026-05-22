"use client"

import { motion } from "framer-motion"
import { GradientBackground } from "./gradient-background"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <GradientBackground />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-sm uppercase tracking-[0.3em] text-white/60"
        >
          A Creative Institution for the Age of AI
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl leading-tight text-white md:text-7xl lg:text-8xl"
        >
          <span className="text-balance">
            Train to become a<br />
            <span className="italic">creative director</span>
            <br />
            of machines
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70"
        >
          Hands-on studios in writing, film, fashion, music, spatial design, and more.
          Learn to collaborate with AI to create work that is unmistakably human.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#apply"
            className="inline-flex items-center gap-2 bg-white px-8 py-4 text-sm font-medium text-black transition-transform hover:scale-105"
          >
            Apply for Fall 2025
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#manifesto"
            className="inline-flex items-center gap-2 border border-white/20 px-8 py-4 text-sm text-white transition-colors hover:bg-white/10"
          >
            Read the Manifesto
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}
