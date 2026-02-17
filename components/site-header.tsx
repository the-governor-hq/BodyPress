"use client"

import { Activity } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary" />
          <span className="text-lg font-bold tracking-tight text-foreground">
            BodyPress
          </span>
        </div>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          <a
            href="#how-it-works"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            How it works
          </a>
          <a
            href="#sample"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Sample
          </a>
          <a
            href="#subscribe"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            Subscribe
          </a>
        </nav>
      </div>
    </header>
  )
}
