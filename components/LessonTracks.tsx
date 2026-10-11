export default function LessonTracks() {
  const tracks = [
    {
      track: "TRACK A",
      title: "KIDS & BALLSCHULE",
      age: "5–8 JAHRE",
      ageHighlight: false,
      description:
        "Motorikschulung, Spaß an der Bewegung und erste Ballwechsel nach den Richtlinien der Heidelberger Ballschule mit altersgerechtem Red-Ball-Equipment.",
      format: "KLEINGRUPPEN",
      isElite: false,
    },
    {
      track: "TRACK B",
      title: "JUGEND- & TEAMTRAINING",
      age: "9–17 JAHRE",
      ageHighlight: false,
      description:
        "Technikvertiefung, intensive Matchpraxis, Jugend-Tenniscamps, gezielte Vorbereitung auf Medenspiele und Bezirksmeisterschaften in homogenen Gruppen.",
      format: "SAISONVERTRAG & CAMPS",
      isElite: false,
    },
    {
      track: "TRACK C",
      title: "ERWACHSENENTRAINING",
      age: "ALLE LEVELS",
      ageHighlight: false,
      description:
        "Vom Neueinsteiger bis zum erfahrenen Club-Medaillenspieler: Individuelles Techniktraining, dynamische Drills, After-Work-Gruppen und Videoanalysen.",
      format: "EINZEL / 10ER-KARTE",
      isElite: false,
    },
    {
      track: "TRACK D",
      title: "LEISTUNGS- & TURNIERKADER",
      age: "AMBITIONIERT // DTB",
      ageHighlight: true,
      description:
        "Intensives Leistungstraining nach ATP & Davis-Cup-Methodik. DTB-Ranglisten Vorbereitung, Match-Scouting, Taktikschulung und Betreuung am Center Court.",
      format: "LEISTUNGSPAKET",
      isElite: true,
    },
  ];

  return (
    <section
      className="w-full bg-surface-raised border-y border-border-subtle px-margin-mobile lg:px-margin py-space-xxl"
      id="tracks"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <div>
            <span className="font-label-mono-sm text-label-mono-sm text-border-highlight uppercase tracking-widest font-bold block mb-space-xs">
              TRAININGSPROGRAMME
            </span>
            <h2 className="font-headline-xl text-headline-xl text-text-primary uppercase tracking-tight">
              UNSERE TRAININGSMODULE
            </h2>
          </div>
          <span className="font-label-mono-sm text-label-mono-sm text-text-secondary uppercase">
            EINSTIEG JEDERZEIT MÖGLICH • INDIVIDUELLE EINSTUFUNG
          </span>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {tracks.map((item) => (
            <div
              key={item.track}
              className={`bg-surface-card p-space-lg flex flex-col justify-between hover:border-border-highlight transition-all duration-200 relative ${
                item.isElite
                  ? "border border-border-highlight/60 shadow-[0_0_20px_rgba(204,255,0,0.1)]"
                  : "border border-border-subtle"
              }`}
            >
              {item.isElite && (
                <div className="absolute -top-3 right-4 px-2 py-0.5 bg-border-highlight text-surface-base font-label-mono-sm text-label-mono-sm font-bold uppercase">
                  ELITE TIER
                </div>
              )}

              <div>
                <div className="inline-block px-2 py-0.5 bg-surface-base border border-border-highlight text-border-highlight font-label-mono-sm text-label-mono-sm font-bold uppercase tracking-wider mb-space-md">
                  {item.track}
                </div>
                <h3 className="font-headline-md text-headline-md text-text-primary uppercase mb-space-xs">
                  {item.title}
                </h3>
                <span
                  className={`font-label-mono-sm text-label-mono-sm block mb-space-md font-bold ${
                    item.ageHighlight ? "text-border-highlight" : "text-text-secondary"
                  }`}
                >
                  {item.age}
                </span>
                <p className="font-body-sm text-body-sm text-text-secondary mb-space-lg">
                  {item.description}
                </p>
              </div>

              <div className="pt-space-md border-t border-border-subtle flex items-center justify-between font-label-mono-sm text-label-mono-sm text-text-primary">
                <span className="text-text-secondary uppercase">FORMAT:</span>
                <span className="text-border-highlight font-bold uppercase">{item.format}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
