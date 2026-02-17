"use client"

import { useState } from "react"
import { ArrowRight, Activity } from "lucide-react"

export function Hero() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-24 pb-20 text-center">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-[500px] w-[700px] rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Pill badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5">
          <Activity className="h-3.5 w-3.5 text-primary" />
          <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
            AI-Powered Health Briefings
          </span>
        </div>

        <h1 className="text-balance text-5xl leading-[1.1] font-bold tracking-tight text-foreground md:text-7xl">
          Your Body,{" "}
          <span className="text-primary">Briefed</span> Daily
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          We turn your wearable data into a personalized morning briefing.
          Sleep score, HRV, heart rate — contextualized with weather, air
          quality, and UV index using AI agents.
        </p>

        {/* Email form */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="hero-email" className="sr-only">
              Email address
            </label>
            <input
              id="hero-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="flex-1 rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Get the Briefing
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        ) : (
          <div className="mx-auto mt-10 max-w-md rounded-lg border border-primary/30 bg-primary/10 px-6 py-4">
            <p className="text-sm font-medium text-primary">
              You{"'"}re in. Check your inbox for your first briefing.
            </p>
          </div>
        )}

        <p className="mt-4 text-xs text-muted-foreground">
          Free forever. One email per day. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
