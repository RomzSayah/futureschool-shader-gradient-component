"use client"

import { useState } from "react"
import { CinematicIntro } from "@/components/cinematic-intro"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ManifestoSection } from "@/components/manifesto-section"
import { StudiosSection } from "@/components/studios-section"
import { InstructorsSection } from "@/components/instructors-section"
import { OutcomesSection } from "@/components/outcomes-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { ApplicationSection } from "@/components/application-section"
import { FooterSection } from "@/components/footer-section"

export default function Page() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <>
      {showIntro && <CinematicIntro onComplete={() => setShowIntro(false)} />}

      <main className="bg-black">
        <Navigation />
        <HeroSection />
        <ManifestoSection />
        <StudiosSection />
        <InstructorsSection />
        <OutcomesSection />
        <ShowcaseSection />
        <ApplicationSection />
        <FooterSection />
      </main>
    </>
  )
}
