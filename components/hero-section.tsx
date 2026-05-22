"use client"

import { motion } from "framer-motion"
import { GradientBackground } from "./gradient-background"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <GradientBackground />
      
      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-6 pb-24 pt-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="font-serif text-[12vw] leading-[0.85] tracking-tight text-white md:text-[10vw] lg:text-[8vw]">
              <span className="block">The Future</span>
              <span className="block italic">School</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 max-w-xl text-center text-lg leading-relaxed text-white/70 md:text-xl"
          >
            Creative education for the age of AI.
            <br />
            <span className="text-white/50">Hands-on studios. Working professionals. Real output.</span>
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-white/10 px-6 py-6"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-white/50">
              <span>Writing</span>
              <span className="hidden text-white/20 md:inline">/</span>
              <span>Film</span>
              <span className="hidden text-white/20 md:inline">/</span>
              <span>Fashion</span>
              <span className="hidden text-white/20 md:inline">/</span>
              <span>Music</span>
              <span className="hidden text-white/20 md:inline">/</span>
              <span>Spatial Design</span>
              <span className="hidden text-white/20 md:inline">/</span>
              <span>Brand</span>
              <span className="hidden text-white/20 md:inline">/</span>
              <span>Product</span>
            </div>
            
            <a
              href="#apply"
              className="group flex items-center gap-3 text-sm text-white transition-colors hover:text-white/80"
            >
              <span className="uppercase tracking-widest">Apply for Fall 2025</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
