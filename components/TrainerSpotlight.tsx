import Image from "next/image";
import { getAssetPath } from "@/lib/assets";

/**
 * Coach profile section presenting credentials, career milestones, and bio.
 */
export default function TrainerSpotlight() {
  const credentials = [
    { title: "GPTCA / ATP A-LIZENZ", desc: "Höchste internationale Coaching-Stufe der ATP Tour" },
    { title: "USTA A-LIZENZ & DIPLOM", desc: "Zertifizierter US Tennis Association Diplom-Trainer" },
    { title: "EX-DAVIS-CUP SPIELER", desc: "Internationale Match- und Tourerfahrung unter Profibedingungen" },
    { title: "RAFA NADAL ACADEMY SCOUT", desc: "Offizieller Talent Scout für Nachwuchskader in Deutschland" },
    { title: "DTB LIZENZTRAINER", desc: "Anerkannter Trainer des Deutschen Tennis Bundes" },
    { title: "YONEX STÜTZPUNKTLEITER", desc: "Offizielle Racket- und Materialberatung am Center Court" },
  ];

  return (
    <section className="w-full bg-surface-base border-t border-border-subtle px-margin-mobile lg:px-margin py-space-xxl relative overflow-hidden" id="trainer-bio">
      {/* Background glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-border-highlight/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Left Column: Portrait & Live Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[420px] bg-surface-card border border-border-subtle p-2 group hover:border-border-highlight transition-all duration-300">
              <div className="relative w-full h-[480px] bg-surface-raised overflow-hidden">
                <Image
                  src={getAssetPath("/images/amir/amir.png")}
                  alt="Cheftrainer Amir Reza"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating credentials badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-surface-card/95 border border-border-highlight/40 p-space-sm backdrop-blur-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-headline-md text-headline-md text-text-primary uppercase font-bold">
                    AMIR REZA
                  </span>
                  <span className="font-label-mono-sm text-label-mono-sm text-border-highlight font-bold px-2 py-0.5 bg-surface-base border border-border-highlight/30 uppercase">
                    HEAD COACH
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={getAssetPath("/images/amir/official_atp_certified.png")}
                    alt="ATP"
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                  <span className="font-label-mono-sm text-label-mono-sm text-text-secondary uppercase">
                    ATP &amp; DAVIS CUP TOUR LEVEL
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Credentials Grid */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="font-label-mono-sm text-label-mono-sm text-border-highlight uppercase tracking-widest font-bold block mb-space-xs">
              DER CHEFTRAINER
            </span>
            <h2 className="font-headline-xl text-headline-xl text-text-primary uppercase tracking-tight mb-space-md">
              LEIDENSCHAFT, TOUR-ERFAHRUNG &amp; SYSTEMATIK
            </h2>
            <p className="font-body-lg text-body-lg text-text-secondary mb-space-md leading-relaxed">
              Als ehemaliger Davis-Cup-Spieler bringt Amir Reza die Intensität und Taktik des
              internationalen Spitzensports direkt auf den Platz. Trotz anspruchsvoller Standards steht
              immer die Spielfreude im Mittelpunkt: Denn echte Leistungssteigerung entsteht durch
              Motivation, Vertrauen und biomechanische Präzision.
            </p>
            <p className="font-body-md text-body-md text-text-muted mb-space-lg">
              Durch die langjährige Kooperation mit Schulen und Kindergärten im Raum Weiterstadt und
              Pfungstadt sowie intensive Turnierbetreuung fördert Amir sowohl junge Talente als auch
              ambitionierte Medenspieler und Quereinsteiger.
            </p>

            {/* Qualifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm w-full mb-space-lg">
              {credentials.map((c) => (
                <div
                  key={c.title}
                  className="bg-surface-card border border-border-subtle p-3 flex flex-col hover:border-border-highlight/40 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 bg-border-highlight inline-block" />
                    <span className="font-label-mono-sm text-label-mono-sm text-text-primary font-bold uppercase tracking-wider">
                      {c.title}
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-text-secondary">
                    {c.desc}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#inquiry"
              className="bg-border-highlight hover:bg-volt-bright text-surface-base font-label-mono-lg text-label-mono-lg px-space-lg py-space-sm uppercase font-bold tracking-wider transition-all inline-flex items-center gap-2 hover:shadow-[0_0_20px_rgba(204,255,0,0.3)]"
            >
              <span>PROBETRAINING MIT AMIR VEREINBAREN</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
