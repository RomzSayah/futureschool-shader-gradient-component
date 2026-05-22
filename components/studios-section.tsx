"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GradientBackground } from "./gradient-background"

const studios = [
  {
    title: "Writing Studio",
    description:
      "Explore collaborative authorship with AI. Write novels, essays, and experimental prose that push the boundaries of narrative.",
    topics: ["Prompt Architecture", "Voice & Style", "Narrative Structure", "AI Collaboration"],
  },
  {
    title: "Film Studio",
    description:
      "Direct AI-powered visual storytelling. From concept to final cut, learn to orchestrate machines to realize your cinematic vision.",
    topics: ["Visual Direction", "Storyboarding", "AI Cinematography", "Post-Production"],
  },
  {
    title: "Fashion Studio",
    description:
      "Design collections that blend human intuition with generative aesthetics. Shape the future of wearable art.",
    topics: ["Concept Development", "Generative Design", "Material Innovation", "Collection Curation"],
  },
  {
    title: "Music Studio",
    description:
      "Compose, produce, and perform at the intersection of human emotion and machine capability. Find new sonic territories.",
    topics: ["Sound Design", "AI Composition", "Production Techniques", "Live Performance"],
  },
  {
    title: "Spatial Design Studio",
    description:
      "Architect immersive environments and experiences. From physical spaces to virtual worlds, design the places we inhabit.",
    topics: ["Environmental Design", "VR/AR Spaces", "Installation Art", "World Architecture"],
  },
  {
    title: "Brand Studio",
    description:
      "Build identities that resonate in an attention-saturated world. Create brands with soul and strategic intelligence.",
    topics: ["Identity Systems", "Strategic Positioning", "Visual Language", "Cultural Relevance"],
  },
  {
    title: "Product Design Studio",
    description:
      "Design objects, interfaces, and systems that serve human needs beautifully. From concept to prototype.",
    topics: ["User Research", "Prototyping", "Interface Design", "Design Systems"],
  },
  {
    title: "Worldbuilding Studio",
    description:
      "Construct coherent fictional universes across media. Build the mythologies, histories, and rules of new realities.",
    topics: ["Universe Design", "Lore Development", "Cross-Media Narrative", "Speculative Fiction"],
  },
]

export function StudiosSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="studios" className="relative min-h-screen overflow-hidden py-32 md:py-48" ref={ref}>
      {/* Gradient background continues here */}
      <div className="absolute inset-0">
        <GradientBackground />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/40">
            Live Creative Studios
          </p>
          <h2 className="max-w-2xl font-serif text-4xl text-white md:text-5xl">
            Hands-on learning with AI, guided by working professionals
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {studios.map((studio, index) => (
            <motion.article
              key={studio.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="mb-6 flex items-start justify-between">
                <h3 className="font-serif text-2xl text-white">{studio.title}</h3>
                <span className="text-sm text-white/30">0{index + 1}</span>
              </div>
              <p className="mb-6 leading-relaxed text-white/60">{studio.description}</p>
              <div className="flex flex-wrap gap-2">
                {studio.topics.map((topic) => (
                  <span
                    key={topic}
                    className="border border-white/10 px-3 py-1 text-xs text-white/50"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <div className="absolute bottom-8 right-8 opacity-0 transition-opacity group-hover:opacity-100">
                <svg
                  className="h-5 w-5 text-white/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
