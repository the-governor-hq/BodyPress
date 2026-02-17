const brands = [
  "Apple Watch",
  "Garmin",
  "WHOOP",
  "Oura Ring",
  "Fitbit",
  "Samsung Galaxy Watch",
]

export function Integrations() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
          Works with your favorite wearables
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-lg font-semibold tracking-tight text-foreground/40 transition-colors hover:text-foreground/70"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
