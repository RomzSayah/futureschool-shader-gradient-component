"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { GradientBackground } from "./gradient-background"

export function ApplicationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [selectedStudio, setSelectedStudio] = useState("")

  const studios = [
    "Writing Studio",
    "Film Studio",
    "Fashion Studio",
    "Music Studio",
    "Spatial Design Studio",
    "Brand Studio",
    "Product Design Studio",
    "Worldbuilding Studio",
  ]

  return (
    <section id="apply" className="relative overflow-hidden py-32 md:py-48" ref={ref}>
      <GradientBackground />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/60">
            Applications Open
          </p>
          <h2 className="mb-6 font-serif text-4xl text-white md:text-6xl">
            Join the Fall 2025 Cohort
          </h2>
          <p className="mx-auto max-w-xl text-lg text-white/60">
            12-week intensive. Live instruction. Portfolio-driven outcomes. Limited to 20
            students per studio.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-xl space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-white/60">First Name</label>
              <input
                type="text"
                className="w-full border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-white/40"
                placeholder="Your first name"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/60">Last Name</label>
              <input
                type="text"
                className="w-full border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-white/40"
                placeholder="Your last name"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/60">Email</label>
            <input
              type="email"
              className="w-full border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-white/40"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/60">Studio Interest</label>
            <select
              value={selectedStudio}
              onChange={(e) => setSelectedStudio(e.target.value)}
              className="w-full appearance-none border border-white/20 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-white/40"
            >
              <option value="" className="bg-black">
                Select a studio
              </option>
              {studios.map((studio) => (
                <option key={studio} value={studio} className="bg-black">
                  {studio}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/60">
              Portfolio or Website (Optional)
            </label>
            <input
              type="url"
              className="w-full border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-white/40"
              placeholder="https://yourportfolio.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/60">
              Why do you want to join The Future School?
            </label>
            <textarea
              rows={4}
              className="w-full resize-none border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-white/40"
              placeholder="Tell us about your creative practice and what you hope to achieve..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white px-8 py-4 text-sm font-medium text-black transition-all hover:bg-white/90"
          >
            Submit Application
          </button>

          <p className="text-center text-sm text-white/40">
            Applications reviewed on a rolling basis. Decisions within 2 weeks.
          </p>
        </motion.form>
      </div>
    </section>
  )
}
