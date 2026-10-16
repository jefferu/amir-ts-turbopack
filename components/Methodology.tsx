/**
 * Training framework overview detailing biomechanical, tactical, and athletic development phases.
 */
export default function Methodology() {
  const steps = [
    {
      step: "01",
      icon: "sports_tennis",
      title: "BIOMECHANIK & SCHLAGTECHNIK",
      description:
        "Moderne Topspin-Vorhand nach Rafa Nadal Academy Standards, ergonomische Beinarbeit, Slice & variable Aufschlagtechnik für verletzungsfreie Höchstleistung.",
      tags: ["Kinetic Chain", "Video Feedback", "Treffpunktkontrolle"],
      highlightTagIndex: 2,
    },
    {
      step: "02",
      icon: "timeline",
      title: "TAKTIK & SPIELAUFBAU",
      description:
        "Strukturierte Spielzüge, intelligentes Winkelspiel, Transition ans Netz und mentale Matchplay-Stärke unter extremem Turnierdruck und Wettkampfbedingungen.",
      tags: ["Court Geometry", "Pattern Play", "Net Rush"],
      highlightTagIndex: 1,
    },
    {
      step: "03",
      icon: "psychology",
      title: "ATHLETIK & MENTALES TRAINING",
      description:
        "Spezifische Tenniskondition, explosive Richtungswechsel und unerschütterliche Nervenstärke in entscheidenden Big Points sowie Tiebreaks.",
      tags: ["Speed & Agility", "Mental Resilience", "Injury Prevention"],
      highlightTagIndex: 2,
    },
  ];

  return (
    <section
      className="w-full bg-surface-raised border-y border-border-subtle px-margin-mobile lg:px-margin py-space-xxl"
      id="methodology"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <div>
            <span className="font-label-mono-sm text-label-mono-sm text-border-highlight uppercase tracking-widest font-bold block mb-space-xs">
              SYSTEMATISCHE LEISTUNGSSTEIGERUNG
            </span>
            <h2 className="font-headline-xl text-headline-xl text-text-primary uppercase tracking-tight">
              DAS TRAININGSKONZEPT
            </h2>
          </div>
          <p className="font-body-md text-body-md text-text-secondary max-w-md">
            Strukturierte Entwicklung vom Fundament bis zur Wettkampfreife nach modernsten Lehrplänen
            internationaler Spitzenakademien.
          </p>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {steps.map((tier) => (
            <div
              key={tier.step}
              className="bg-surface-card border border-border-subtle p-space-lg flex flex-col justify-between hover:border-border-highlight transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-headline-xl text-display-hero text-border-highlight leading-none font-bold">
                    {tier.step}
                  </span>
                  <span className="material-symbols-outlined text-text-muted group-hover:text-border-highlight transition-colors text-[28px]">
                    {tier.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-text-primary uppercase mb-space-sm group-hover:text-border-highlight transition-colors">
                  {tier.title}
                </h3>
                <p className="font-body-md text-body-md text-text-secondary mb-space-lg">
                  {tier.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-space-md border-t border-border-subtle">
                {tier.tags.map((tag, idx) => (
                  <span
                    key={tag}
                    className={`px-2 py-1 bg-surface-base font-label-mono-sm text-label-mono-sm uppercase ${
                      idx === tier.highlightTagIndex
                        ? "text-border-highlight font-bold"
                        : "text-text-secondary"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
