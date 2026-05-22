"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function FooterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer className="relative bg-black py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid gap-12 border-t border-white/10 pt-20 md:grid-cols-4"
        >
          <div className="md:col-span-2">
            <h3 className="mb-4 font-serif text-2xl text-white">The Future School</h3>
            <p className="max-w-sm text-sm leading-relaxed text-white/50">
              Training the next generation of creative directors of machines. Based in the
              cloud, connected globally.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm uppercase tracking-widest text-white/40">Studios</p>
            <ul className="space-y-2">
              {[
                "Writing",
                "Film",
                "Fashion",
                "Music",
                "Spatial Design",
                "Brand",
                "Product Design",
                "Worldbuilding",
              ].map((studio) => (
                <li key={studio}>
                  <a
                    href="#studios"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {studio}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm uppercase tracking-widest text-white/40">Connect</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@futureschool.ai"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  hello@futureschool.ai
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row"
        >
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} The Future School. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-white/30 transition-colors hover:text-white/60">
              Privacy
            </a>
            <a href="#" className="text-sm text-white/30 transition-colors hover:text-white/60">
              Terms
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
