import { Activity } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-primary" />
          <span className="text-sm font-bold tracking-tight text-foreground">
            BodyPress
          </span>
        </div>
        <p className="text-center text-xs text-muted-foreground">
          Your data stays yours. We never share or sell your health information.
        </p>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} BodyPress
        </p>
      </div>
    </footer>
  )
}
