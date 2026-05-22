import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StudiosSection } from "@/components/studios-section"
import { InstructorsSection } from "@/components/instructors-section"
import { OutcomesSection } from "@/components/outcomes-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { ApplicationSection } from "@/components/application-section"
import { FooterSection } from "@/components/footer-section"

export default function Page() {
  return (
    <main className="bg-black">
      <Navigation />
      <HeroSection />
      <StudiosSection />
      <InstructorsSection />
      <OutcomesSection />
      <ShowcaseSection />
      <ApplicationSection />
      <FooterSection />
    </main>
  )
}
