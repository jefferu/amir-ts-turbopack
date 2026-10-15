import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AGB | Tennisschule Amir",
  description: "Allgemeine Geschäfts- und Trainingsbedingungen der Tennisschule Amir Reza.",
};

export default function AgbPage() {
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
              VERTRAGSGRUNDLAGE
            </span>
            <h1 className="font-headline-xl text-headline-xl text-text-primary uppercase tracking-tight">
              ALLGEMEINE GESCHÄFTSBEDINGUNGEN (AGB)
            </h1>
            <p className="font-body-sm text-body-sm text-text-secondary">
              Trainings- und Teilnahmebedingungen der Tennisschule Amir Reza
            </p>
          </div>

          <div className="space-y-space-lg text-text-secondary font-body-md leading-relaxed">
            {/* 1. Geltungsbereich */}
            <section className="space-y-space-xs">
              <h2 className="font-headline-md text-headline-md text-text-primary uppercase">
                § 1 GELTUNGSBEREICH &amp; VERTRAGSPARTNER
              </h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Trainingsangebote, Schnupperstunden,
                Feriencamps und 10er-Karten-Vereinbarungen zwischen der Tennisschule Amir (Inhaber Amir Reza,
                Gerlachshöhe 28a, 64367 Mühltal) und den Trainingsteilnehmern bzw. deren gesetzlichen Vertretern.
              </p>
            </section>

            {/* 2. Anmeldung und Zustandekommen des Vertrages */}
            <section className="space-y-space-xs">
              <h2 className="font-headline-md text-headline-md text-text-primary uppercase">
                § 2 ANMELDUNG &amp; VERTRAGSSCHLUSS
              </h2>
              <p>
                Die Anfrage über das Online-Formular auf dieser Website stellt eine unverbindliche Terminanfrage dar.
                Ein verbindlicher Trainingsvertrag kommt erst nach individueller Terminbestätigung und Vereinbarung
                zwischen dem Trainerteam und dem Teilnehmer zustande.
              </p>
            </section>

            {/* 3. Preise & Zahlungsmodalitäten */}
            <section className="space-y-space-xs">
              <h2 className="font-headline-md text-headline-md text-text-primary uppercase">
                § 3 PREISE &amp; ZAHLUNGSBEDINGUNGEN
              </h2>
              <p>
                Es gelten die jeweils bei Buchung vereinbarten Tarife (z.&nbsp;B. Gruppentraining ab 150 € / Saison,
                10er-Karten ab 550 € inklusive Trainerhonorar und anteiliger Platzgebühr). Zahlungen sind nach
                Rechnungsstellung fristgerecht zu leisten.
              </p>
            </section>

            {/* 4. Ausfall von Trainingsstunden & Witterung */}
            <section className="space-y-space-xs">
              <h2 className="font-headline-md text-headline-md text-text-primary uppercase">
                § 4 ABSAGEN, WITTERUNG &amp; NACHHOLTERMINE
              </h2>
              <p>
                Einzelstunden müssen mindestens 24 Stunden vor dem vereinbarten Termin abgesagt werden, andernfalls
                muss die Stunde in voller Höhe berechnet werden. Bei schlechter Witterung im Freiluftbetrieb wird nach
                Möglichkeit in die Tennishalle (SG Weiterstadt) ausgewichen oder ein adäquater Nachholtermin bzw.
                Theorie-/Athletikeinheit angeboten.
              </p>
            </section>

            {/* 5. Aufsichtspflicht & Haftung */}
            <section className="space-y-space-xs">
              <h2 className="font-headline-md text-headline-md text-text-primary uppercase">
                § 5 HAFTUNG &amp; AUFSICHTSPFLICHT BEI MINDERJÄHRIGEN
              </h2>
              <p>
                Die Aufsichtspflicht der Trainer bei minderjährigen Teilnehmern beschränkt sich auf die Dauer der
                vereinbarten Trainingseinheit auf dem Tennisplatz. Die Teilnahme am Training erfolgt auf eigene Gefahr.
                Eine private Haftpflicht- sowie Unfallversicherung wird den Teilnehmern dringend empfohlen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
