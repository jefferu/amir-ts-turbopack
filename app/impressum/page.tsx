import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Impressum | Tennisschule Amir",
  description: "Rechtliche Pflichtangaben und Impressum der Tennisschule Amir Reza.",
};

export default function ImpressumPage() {
  return (
    <div className="bg-surface-base text-on-surface min-h-screen flex flex-col selection:bg-border-highlight selection:text-surface-base">
      <Header />
      <main className="w-full pt-[130px] pb-space-xxl px-margin-mobile lg:px-margin flex-1">
        <div className="max-w-[1040px] mx-auto bg-surface-card border border-border-subtle p-space-lg md:p-space-xl">
          {/* Breadcrumb / Back */}
          <div className="mb-space-md">
            <Link
              href="/"
              className="inline-flex items-center gap-1 font-label-mono-sm text-label-mono-sm text-border-highlight hover:underline uppercase"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              ZURÜCK ZUR STARTSEITE
            </Link>
          </div>

          <div className="border-b border-border-subtle pb-space-md mb-space-lg">
            <span className="font-label-mono-sm text-label-mono-sm text-border-highlight uppercase tracking-widest font-bold block mb-1">
              RECHTLICHE INFORMATIONEN
            </span>
            <h1 className="font-headline-xl text-headline-xl text-text-primary uppercase tracking-tight">
              IMPRESSUM
            </h1>
            <p className="font-body-sm text-body-sm text-text-secondary">
              Angaben gemäß § 5 TMG / § 18 Abs. 2 MStV
            </p>
          </div>

          <div className="space-y-space-lg text-text-secondary font-body-md leading-relaxed">
            {/* Betreiber */}
            <section className="bg-surface-raised p-space-md border border-border-subtle">
              <h2 className="font-headline-md text-headline-md text-text-primary uppercase mb-space-xs">
                ANGABEN GEMÄSS § 5 TMG
              </h2>
              <p className="text-text-primary font-bold">Tennisschule Amir</p>
              <p>Inhaber &amp; Cheftrainer: Amir Reza</p>
              <p>Gerlachshöhe 28a</p>
              <p>64367 Mühltal</p>
              <p>Deutschland</p>
            </section>

            {/* Kontakt */}
            <section className="bg-surface-raised p-space-md border border-border-subtle">
              <h2 className="font-headline-md text-headline-md text-text-primary uppercase mb-space-xs">
                KONTAKT
              </h2>
              <div className="flex flex-col gap-1">
                <p>
                  <strong className="text-text-primary">Telefon:</strong>{" "}
                  <a href="tel:01624207661" className="hover:text-border-highlight transition-colors">
                    0162 - 420 76 61
                  </a>
                </p>
                <p>
                  <strong className="text-text-primary">E-Mail:</strong>{" "}
                  <a href="mailto:info@ts-amir.de" className="hover:text-border-highlight transition-colors">
                    info@ts-amir.de
                  </a>
                </p>
                <p>
                  <strong className="text-text-primary">Website:</strong>{" "}
                  <a href="https://ts-amir.de" target="_blank" rel="noopener noreferrer" className="hover:text-border-highlight transition-colors">
                    www.ts-amir.de
                  </a>
                </p>
              </div>
            </section>

            {/* Trainingsstützpunkte */}
            <section className="bg-surface-raised p-space-md border border-border-subtle">
              <h2 className="font-headline-md text-headline-md text-text-primary uppercase mb-space-xs">
                OFFIZIELLE TRAININGSSTÜTZPUNKTE &amp; KOOPERATIONEN
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong className="text-text-primary">SG Weiterstadt (Tennisabteilung):</strong> Am Sportpark 1, 64331 Weiterstadt
                </li>
                <li>
                  <strong className="text-text-primary">TC Pfungstadt:</strong> Christian-Stock-Stadion, 64319 Pfungstadt
                </li>
              </ul>
            </section>

            {/* Redaktionell Verantwortlicher */}
            <section className="bg-surface-raised p-space-md border border-border-subtle">
              <h2 className="font-headline-md text-headline-md text-text-primary uppercase mb-space-xs">
                VERANTWORTLICH FÜR DEN INHALT NACH § 18 ABS. 2 MSTV
              </h2>
              <p>Amir Reza</p>
              <p>Gerlachshöhe 28a</p>
              <p>64367 Mühltal</p>
              <p>Deutschland</p>
            </section>

            {/* Streitbeilegung */}
            <section className="space-y-space-xs">
              <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase">
                EU-STREITSCHLICHTUNG
              </h3>
              <p className="font-body-sm text-body-sm">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-border-highlight underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                .<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            {/* Verbraucherstreitbeilegung */}
            <section className="space-y-space-xs">
              <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase">
                VERBRAUCHERSTREITBEILEGUNG / UNIVERSALSCHLICHTUNGSSTELLE
              </h3>
              <p className="font-body-sm text-body-sm">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            {/* Haftung für Inhalte & Links */}
            <section className="space-y-space-xs">
              <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase">
                HAFTUNG FÜR INHALTE &amp; LINKS
              </h3>
              <p className="font-body-sm text-body-sm">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach
                den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet,
                übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen,
                die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="font-body-sm text-body-sm">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
                haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
                der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
