export default function SocialProof() {
  return (
    <section className="w-full px-margin-mobile lg:px-margin pb-space-xxl" id="reviews">
      <div className="max-w-[1040px] mx-auto bg-surface-card border border-border-subtle p-space-lg md:p-space-xl flex flex-col items-start relative overflow-hidden shadow-2xl">
        {/* Glowing 5-Star Rating */}
        <div className="flex items-center gap-1 mb-space-md">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="material-symbols-outlined text-border-highlight text-[20px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
          ))}
          <span className="font-label-mono-sm text-label-mono-sm text-border-highlight uppercase font-bold ml-space-xs">
            5.0 TOUR COACH QUALITY
          </span>
        </div>

        {/* Quote */}
        <blockquote className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-text-primary uppercase tracking-tight leading-snug mb-space-lg">
          „Erfolge unserer Nachwuchsspieler: 1. Plätze bei Kreismeisterschaften &amp; Top-Platzierungen
          bei DTB-Ranglistenturnieren. Amir bringt jedes Talent mit fundierter Biomechanik und
          Leidenschaft auf das nächste Level.“
        </blockquote>

        {/* Author and Badges */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pt-space-md border-t border-border-subtle">
          <div>
            <div className="font-body-md text-body-md text-text-primary font-bold">Markus K.</div>
            <div className="font-label-mono-sm text-label-mono-sm text-text-secondary uppercase">
              Elternbeirat &amp; Mannschaftsführer TC Pfungstadt
            </div>
          </div>
          <div className="flex items-center gap-space-xs flex-wrap">
            <span className="px-2 py-1 bg-surface-base border border-border-subtle font-label-mono-sm text-label-mono-sm text-border-highlight uppercase font-bold">
              DTB RANGLISTE U14 / U16
            </span>
            <span className="px-2 py-1 bg-surface-base border border-border-subtle font-label-mono-sm text-label-mono-sm text-text-secondary uppercase">
              BEZIRKSMEISTER 2024
            </span>
            <span className="px-2 py-1 bg-surface-base border border-border-subtle font-label-mono-sm text-label-mono-sm text-text-secondary uppercase">
              HESSISCHE MEISTERSCHAFT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
