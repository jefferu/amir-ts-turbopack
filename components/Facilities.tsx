import Image from "next/image";
import { getAssetPath } from "@/lib/assets";

/**
 * Facilities section highlighting club partner locations and international academy ties.
 */
export default function Facilities() {
  const facilities = [
    {
      icon: "location_on",
      badge: "NEU AB WINTER 25/26",
      badgeBorder: "border-border-highlight/30 text-border-highlight",
      name: "SG WEITERSTADT",
      description:
        "Offizieller Trainingsstützpunkt. Erstklassige Sandplätze für die Freiluftsaison sowie moderne gelenkschonende Teppich-Hallenplätze mit professioneller LED-Flutlichtanlage.",
      address: "AM SPORTPARK 1, 64331 WEITERSTADT",
      image: null,
    },
    {
      icon: "stadium",
      badge: "TRADITIONSPARTNER",
      badgeBorder: "border-border-subtle text-text-secondary",
      name: "TC PFUNGSTADT",
      description:
        "Traditionsreiche Partnerschaft mit gepflegter Clubanlage, mehreren Außen-Sandplätzen und intensiver, kontinuierlicher Jugendförderung für den gesamten Raum Darmstadt.",
      address: "CHRISTIAN-STOCK-STADION, 64319 PFUNGSTADT",
      image: "/images/amir/tsv-pfungstadt.jpg",
    },
    {
      icon: "flight_takeoff",
      badge: "INTERNATIONAL",
      badgeBorder: "border-border-highlight/30 text-border-highlight",
      name: "PARTNER-CAMPS & AKADEMIE",
      description:
        "Internationale Kooperation mit der Rafa Nadal Academy (Mallorca) und der Alexander Waske Tennis-University für exklusive Saisonvorbereitungs- und Intensivcamps.",
      address: "MANACOR (SPANIEN) & OFFENBACH A.M.",
      image: "/images/amir/logo_menu.png",
    },
  ];

  return (
    <section className="w-full px-margin-mobile lg:px-margin py-space-xxl" id="facilities">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <div>
            <span className="font-label-mono-sm text-label-mono-sm text-border-highlight uppercase tracking-widest font-bold block mb-space-xs">
              STANDORTE &amp; KOOPERATIONEN
            </span>
            <h2 className="font-headline-xl text-headline-xl text-text-primary uppercase tracking-tight">
              ERSTKLASSIGE TRAININGSBEDINGUNGEN
            </h2>
          </div>
          <p className="font-body-md text-body-md text-text-secondary max-w-sm">
            Feste Clubstützpunkte im Kreis Darmstadt-Dieburg sowie exklusive Partner-Camps im europäischen Ausland.
          </p>
        </div>

        {/* 3 Facility Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {facilities.map((fac) => (
            <div
              key={fac.name}
              className="bg-surface-card border border-border-subtle p-space-lg flex flex-col justify-between hover:border-border-strong transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="material-symbols-outlined text-border-highlight text-[32px]">
                    {fac.icon}
                  </span>
                  <span
                    className={`font-label-mono-sm text-label-mono-sm px-2 py-0.5 bg-surface-base border uppercase ${fac.badgeBorder}`}
                  >
                    {fac.badge}
                  </span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-text-primary uppercase mb-space-xs group-hover:text-border-highlight transition-colors">
                  {fac.name}
                </h3>
                <p className="font-body-md text-body-md text-text-secondary mb-space-md">
                  {fac.description}
                </p>
              </div>

              <div>
                {fac.image && (
                  <div className="relative h-12 w-full mb-3 flex items-center justify-start opacity-70 group-hover:opacity-100 transition-opacity">
                    <Image
                      src={getAssetPath(fac.image)}
                      alt={fac.name}
                      width={120}
                      height={40}
                      className="object-contain max-h-10"
                    />
                  </div>
                )}
                <div className="font-label-mono-sm text-label-mono-sm text-text-muted pt-space-sm border-t border-border-subtle uppercase">
                  {fac.address}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
