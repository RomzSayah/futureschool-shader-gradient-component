"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const instructors = [
  {
    name: "Maya Chen",
    role: "Creative Director",
    expertise: "Film & Visual Storytelling",
    background: "Former Creative Director at Pixar. 15 years directing award-winning animated features.",
  },
  {
    name: "Theo Blackwood",
    role: "Author & Technologist",
    expertise: "Writing Studio",
    background: "NYT bestselling author. Pioneer in AI-collaborative fiction. MacArthur Fellow.",
  },
  {
    name: "Aisha Okonkwo",
    role: "Fashion Designer",
    expertise: "Fashion Studio",
    background: "Founder of Studio Aisha. Collections shown at Paris and Milan Fashion Weeks.",
  },
  {
    name: "James Park",
    role: "Sound Designer",
    expertise: "Music Studio",
    background: "Grammy-winning producer. Scored 30+ films. Former head of audio at Spotify.",
  },
  {
    name: "Elena Vasquez",
    role: "Architect",
    expertise: "Spatial Design",
    background: "Principal at Vasquez Studio. Designer of the New Museum of Digital Art, Tokyo.",
  },
  {
    name: "Marcus Webb",
    role: "Brand Strategist",
    expertise: "Brand Studio",
    background: "Built brand identities for Apple, Nike, and Airbnb. Author of 'The Soul of Brands'.",
  },
]

export function InstructorsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="instructors" className="relative bg-black py-32 md:py-48" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/40">
            Your Instructors
          </p>
          <h2 className="max-w-3xl font-serif text-4xl text-white md:text-5xl">
            Learn from working creative directors, not academics
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="mb-6 aspect-[3/4] overflow-hidden bg-white/5">
                <div className="flex h-full w-full items-center justify-center">
                  <span className="font-serif text-6xl text-white/10">
                    {instructor.name.charAt(0)}
                  </span>
                </div>
              </div>
              <p className="mb-1 text-xs uppercase tracking-widest text-white/40">
                {instructor.expertise}
              </p>
              <h3 className="mb-1 font-serif text-xl text-white">{instructor.name}</h3>
              <p className="mb-3 text-sm text-white/60">{instructor.role}</p>
              <p className="text-sm leading-relaxed text-white/40">{instructor.background}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
