import { Watch, Cpu, Mail } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: Watch,
    title: "Connect your wearable",
    description:
      "Link your Apple Watch, Garmin, WHOOP, Oura, or Fitbit. We securely sync your health metrics overnight.",
  },
  {
    step: "02",
    icon: Cpu,
    title: "AI agents do the work",
    description:
      "Our LLM-powered agents cross-reference your biometrics with location, weather, air quality, and UV data.",
  },
  {
    step: "03",
    icon: Mail,
    title: "Wake up to your briefing",
    description:
      "A personalized, actionable health briefing lands in your inbox every morning at your preferred time.",
  },
]

export function HowItWorks() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            Three steps from raw data to morning clarity.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="relative">
              {/* Step number */}
              <span className="font-mono text-5xl font-bold text-border">
                {s.step}
              </span>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
              </div>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
