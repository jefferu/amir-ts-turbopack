export default function FeatureGrid() {
  const features = [
    {
      icon: "verified",
      title: "ATP-LIZENZ TRAINER",
      description: "GPTCA & DTB A-Lizenz mit internationaler Tour-Erfahrung.",
    },
    {
      icon: "sports",
      title: "YONEX TESTSCHLÄGER",
      description: "Neueste Ezone, Vcore & Percept Modelle direkt am Platz testen.",
    },
    {
      icon: "videocam",
      title: "VIDEO-ANALYSE",
      description: "Hochauflösende 240fps Erfassung von Treffpunkt und Kinetic Chain.",
    },
    {
      icon: "calendar_month",
      title: "FLEXIBLE ZEITEN",
      description: "Vormittags, Abends & Wochenende inklusive 10er-Karten-Option.",
    },
  ];

  return (
    <section className="w-full bg-surface-raised border-y border-border-subtle px-margin-mobile lg:px-margin py-space-xl">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="p-space-md bg-surface-card border border-border-subtle flex items-start gap-space-sm hover:border-border-highlight/60 transition-colors"
          >
            <span className="material-symbols-outlined text-border-highlight text-[28px] shrink-0">
              {feature.icon}
            </span>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-text-primary uppercase mb-0.5">
                {feature.title}
              </h4>
              <p className="font-body-sm text-body-sm text-text-secondary">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
