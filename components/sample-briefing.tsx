"use client"

import { Sparkles, MapPin, Clock } from "lucide-react"

export function SampleBriefing() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"Here's"} what your briefing looks like
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            A real sample from our AI engine — personalized, contextual,
            actionable.
          </p>
        </div>

        {/* Mock email */}
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          {/* Email header */}
          <div className="flex items-center gap-3 border-b border-border px-6 py-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground">
                BodyPress Daily Briefing
              </p>
              <p className="text-xs text-muted-foreground">
                Monday, February 17 2026
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>6:30 AM</span>
            </div>
          </div>

          {/* Email body */}
          <div className="px-6 py-6">
            {/* Location bar */}
            <div className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span className="font-mono uppercase tracking-wider">
                San Francisco, CA
              </span>
              <span className="text-border">|</span>
              <span>63{"\u00b0"}F Partly Cloudy</span>
              <span className="text-border">|</span>
              <span>AQI 42 Good</span>
            </div>

            {/* Greeting */}
            <p className="text-lg font-semibold text-foreground">
              Good morning. {"Here's"} your body briefing.
            </p>

            {/* Summary cards */}
            <div className="mt-6 space-y-4">
              <BriefingBlock
                title="Sleep Analysis"
                emoji={""}
                color="text-chart-2"
                content="You slept 7h 42m with a score of 87/100 — your best this week. Deep sleep was 1h 48m (up 18%). REM cycles hit 5 complete rounds. Your sleep efficiency was 93%."
              />
              <BriefingBlock
                title="Recovery Status"
                emoji={""}
                color="text-primary"
                content="HRV is 62ms, up 8ms from yesterday. Resting heart rate dropped to 58 bpm. Your autonomic nervous system is well-recovered. You're primed for a hard training day."
              />
              <BriefingBlock
                title="Environment Check"
                emoji={""}
                color="text-chart-4"
                content="UV index will peak at 6 around 1 PM — wear SPF 30+. Air quality is good (AQI 42). Pollen levels are low. Temperature will reach 72\u00b0F by mid-afternoon."
              />
              <BriefingBlock
                title="AI Recommendation"
                emoji={""}
                color="text-primary"
                content="Based on your recovery and the weather: ideal day for outdoor cardio between 8-10 AM. Avoid intense exercise after 2 PM due to UV. Hydrate +20% above baseline given the dry air."
              />
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-border" />

            <p className="text-xs text-muted-foreground">
              Powered by AI agents analyzing your Apple Watch data, local
              weather APIs, and environmental sensors. Your data is never
              shared.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function BriefingBlock({
  title,
  color,
  content,
}: {
  title: string
  emoji: string
  color: string
  content: string
}) {
  return (
    <div className="rounded-lg border border-border bg-secondary/50 p-4">
      <h3 className={`text-sm font-semibold ${color}`}>{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        {content}
      </p>
    </div>
  )
}
