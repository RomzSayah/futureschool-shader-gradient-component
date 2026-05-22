"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const showcaseItems = [
  {
    title: "The Last Garden",
    creator: "Emma Rodriguez",
    studio: "Writing Studio",
    description: "An AI-collaborative novel exploring memory and identity",
  },
  {
    title: "Echoes",
    creator: "David Kim",
    studio: "Film Studio",
    description: "Short film directed entirely with generative cinematography",
  },
  {
    title: "Metamorph Collection",
    creator: "Lucia Chen",
    studio: "Fashion Studio",
    description: "Adaptive garments responding to environmental data",
  },
  {
    title: "Resonance",
    creator: "Alex Obi",
    studio: "Music Studio",
    description: "Album composed through human-AI improvisational sessions",
  },
  {
    title: "Liminal Spaces",
    creator: "Nina Patel",
    studio: "Spatial Design",
    description: "VR installation exploring threshold experiences",
  },
  {
    title: "VOID Identity",
    creator: "Marcus Webb Jr.",
    studio: "Brand Studio",
    description: "Complete brand system for an AI-native creative agency",
  },
]

export function ShowcaseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section className="relative bg-black py-32 md:py-48" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/40">
              Student Showcase
            </p>
            <h2 className="max-w-xl font-serif text-4xl text-white md:text-5xl">
              Work that moves culture forward
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            View all projects
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {showcaseItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="mb-4 aspect-[4/3] overflow-hidden bg-white/5 transition-all group-hover:bg-white/10">
                <div className="flex h-full w-full items-center justify-center">
                  <span className="font-serif text-4xl text-white/10 transition-all group-hover:text-white/20">
                    {item.title.charAt(0)}
                  </span>
                </div>
              </div>
              <p className="mb-1 text-xs uppercase tracking-widest text-white/40">
                {item.studio}
              </p>
              <h3 className="mb-1 font-serif text-xl text-white">{item.title}</h3>
              <p className="mb-2 text-sm text-white/40">by {item.creator}</p>
              <p className="text-sm text-white/60">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
