"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const outcomes = [
  {
    metric: "94%",
    label: "Employment Rate",
    description: "Graduates working in creative roles within 6 months",
  },
  {
    metric: "3x",
    label: "Portfolio Impact",
    description: "Average increase in portfolio engagement metrics",
  },
  {
    metric: "500+",
    label: "Alumni Network",
    description: "Creative professionals across industries worldwide",
  },
  {
    metric: "12",
    label: "Weeks",
    description: "Intensive, immersive studio experience",
  },
]

const testimonials = [
  {
    quote:
      "The Future School fundamentally changed how I think about creativity. I went from fearing AI to directing it with confidence.",
    name: "Jordan Lee",
    cohort: "Cohort 3, Writing Studio",
    outcome: "Now: Lead AI Writer at Penguin Random House",
  },
  {
    quote:
      "This is not about learning tools. It is about developing taste, judgment, and a creative point of view that machines cannot replicate.",
    name: "Priya Sharma",
    cohort: "Cohort 2, Brand Studio",
    outcome: "Now: Creative Director at a Fortune 500",
  },
  {
    quote:
      "I came in as a traditional filmmaker. I left understanding how to orchestrate entire visual universes. The instructors pushed me to find my voice.",
    name: "Marcus Chen",
    cohort: "Cohort 1, Film Studio",
    outcome: "Now: Director, AI-Native Productions",
  },
]

export function OutcomesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="outcomes" className="relative bg-[#0a0a0a] py-32 md:py-48" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/40">
            Student Outcomes
          </p>
          <h2 className="max-w-2xl font-serif text-4xl text-white md:text-5xl">
            Where our graduates go
          </h2>
        </motion.div>

        <div className="mb-24 grid gap-8 border-b border-white/10 pb-24 md:grid-cols-4">
          {outcomes.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center md:text-left"
            >
              <p className="mb-2 font-serif text-5xl text-white">{item.metric}</p>
              <p className="mb-2 text-sm uppercase tracking-widest text-white/60">
                {item.label}
              </p>
              <p className="text-sm text-white/40">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="border-l border-white/20 pl-6"
            >
              <p className="mb-6 font-serif text-lg leading-relaxed text-white/80">
                {`"${testimonial.quote}"`}
              </p>
              <footer>
                <p className="text-sm text-white">{testimonial.name}</p>
                <p className="text-sm text-white/40">{testimonial.cohort}</p>
                <p className="mt-2 text-xs text-white/60">{testimonial.outcome}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
