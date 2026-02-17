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
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-mono text-[10px] sm:text-xs tracking-wider text-muted-foreground uppercase">
          Works with your favorite wearables
        </p>
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-3 sm:gap-y-4">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-sm sm:text-base md:text-lg font-semibold tracking-tight text-foreground/40 transition-colors hover:text-foreground/70"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
