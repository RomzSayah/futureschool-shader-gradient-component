"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Studios", href: "#studios" },
  { label: "Instructors", href: "#instructors" },
  { label: "Outcomes", href: "#outcomes" },
]

export function Navigation() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed left-0 right-0 top-0 z-40 bg-black/80 backdrop-blur-md"
        >
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <a href="#" className="font-serif text-xl text-white">
              TFS
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="#apply"
              className="border border-white/20 bg-white/5 px-5 py-2.5 text-sm text-white transition-all hover:bg-white hover:text-black"
            >
              Apply Now
            </a>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  )
}
