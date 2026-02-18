"use client"

import { useTheme } from "next-themes"
import { Monitor, Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

const cycle = ["system", "light", "dark"] as const
type Theme = (typeof cycle)[number]

const icons: Record<Theme, React.ElementType> = {
  system: Monitor,
  light:  Sun,
  dark:   Moon,
}
const labels: Record<Theme, string> = {
  system: "Auto",
  light:  "Light",
  dark:   "Dark",
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="h-7 w-7" />

  const current = (cycle.includes(theme as Theme) ? theme : "system") as Theme
  const next = cycle[(cycle.indexOf(current) + 1) % cycle.length]
  const Icon = icons[current]

  return (
    <button
      onClick={() => setTheme(next)}
      title={`Theme: ${labels[current]} — click for ${labels[next]}`}
      className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      aria-label={`Switch theme (current: ${labels[current]})`}
    >
      <Icon className="h-4 w-4" />
    </button>
  )
}
