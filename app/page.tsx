import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Integrations } from "@/components/integrations"
import { DataCards } from "@/components/data-cards"
import { HowItWorks } from "@/components/how-it-works"
import { SampleBriefing } from "@/components/sample-briefing"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Integrations />
      <DataCards />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="sample">
        <SampleBriefing />
      </div>
      <div id="subscribe">
        <CtaSection />
      </div>
      <SiteFooter />
    </main>
  )
}
