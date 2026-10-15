import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Datenschutzerklärung | Tennisschule Amir",
  description: "Datenschutzerklärung und Informationen zur Datenverarbeitung nach DSGVO.",
};

export default function DatenschutzPage() {
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
              DSGVO-KONFORMITÄT
            </span>
            <h1 className="font-headline-xl text-headline-xl text-text-primary uppercase tracking-tight">
              DATENSCHUTZERKLÄRUNG
            </h1>
            <p className="font-body-sm text-body-sm text-text-secondary">
              Informationen über die Verarbeitung personenbezogener Daten gemäß Art. 13 und 14 DSGVO
            </p>
          </div>

          <div className="space-y-space-lg text-text-secondary font-body-md leading-relaxed">
            {/* 1. Datenschutz auf einen Blick */}
            <section className="space-y-space-sm">
              <h2 className="font-headline-md text-headline-md text-text-primary uppercase">
                1. DATENSCHUTZ AUF EINEN BLICK
              </h2>
              <h3 className="font-headline-sm text-headline-sm text-border-highlight uppercase">
                ALLGEMEINE HINWEISE
              </h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                persönlich identifiziert werden können.
              </p>

              <h3 className="font-headline-sm text-headline-sm text-border-highlight uppercase">
                DATENERFASSUNG AUF DIESER WEBSITE
              </h3>
              <p>
                <strong className="text-text-primary">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
                <br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:
                <br />
                <span className="text-text-primary block mt-1">
                  Tennisschule Amir<br />
                  Amir Reza<br />
                  Gerlachshöhe 28a<br />
                  64367 Mühltal<br />
                  Telefon: 0162 - 420 76 61<br />
                  E-Mail: info@ts-amir.de
                </span>
              </p>
              <p>
                <strong className="text-text-primary">Wie erfassen wir Ihre Daten?</strong>
                <br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei handelt es sich
                z.&nbsp;B. um Daten, die Sie in unser Buchungs-/Anfrageformular eingeben (Name, Telefonnummer,
                Spielstärke, Trainingswünsche). Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch
                der Website durch IT-Systeme erfasst (z.&nbsp;B. Browsertyp, Betriebssystem, Uhrzeit des Seitenaufrufs).
              </p>
              <p>
                <strong className="text-text-primary">Wofür nutzen wir Ihre Daten?</strong>
                <br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Die im
                Anfrageformular eingegebenen Daten dienen ausschließlich der Kontaktaufnahme zur Vereinbarung von
                Schnupperstunden und Trainingszeiten.
              </p>
            </section>

            {/* 2. Pflichtinformationen und Rechte */}
            <section className="space-y-space-sm pt-space-md border-t border-border-subtle">
              <h2 className="font-headline-md text-headline-md text-text-primary uppercase">
                2. ALLGEMEINE HINWEISE UND PFLICHTINFORMATIONEN
              </h2>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
                dieser Datenschutzerklärung.
              </p>
              <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase">
                IHRE RECHTE ALS BETROFFENE PERSON
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong className="text-text-primary">Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten Daten.
                </li>
                <li>
                  <strong className="text-text-primary">Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie können die Berichtigung unrichtiger Daten verlangen.
                </li>
                <li>
                  <strong className="text-text-primary">Recht auf Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.
                </li>
                <li>
                  <strong className="text-text-primary">Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO) &amp; Datenübertragbarkeit (Art. 20 DSGVO).</strong>
                </li>
                <li>
                  <strong className="text-text-primary">Widerruf Ihrer Einwilligung zur Datenverarbeitung:</strong> Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit formlos per E-Mail widerrufen.
                </li>
                <li>
                  <strong className="text-text-primary">Beschwerderecht bei der zuständigen Aufsichtsbehörde:</strong> Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu (Der Hessische Beauftragte für Datenschutz und Informationsfreiheit).
                </li>
              </ul>
            </section>

            {/* 3. Datenerfassung auf dieser Website */}
            <section className="space-y-space-sm pt-space-md border-t border-border-subtle">
              <h2 className="font-headline-md text-headline-md text-text-primary uppercase">
                3. DATENERFASSUNG AUF DIESER WEBSITE
              </h2>
              <h3 className="font-headline-sm text-headline-sm text-border-highlight uppercase">
                COOKIES &amp; LOKALE SPEICHERUNG
              </h3>
              <p>
                Unsere Website nutzt Cookies und LocalStorage-Einträge. Einige Cookies sind technisch notwendig, damit
                unsere Seite ordnungsgemäß funktioniert. Andere dienen dazu, Ihre Auswahl (wie z.&nbsp;B. Ihre
                Cookie-Präferenzen) zu speichern. Rechtsgrundlage für technisch notwendige Cookies ist Art. 6 Abs. 1
                lit. f DSGVO.
              </p>

              <h3 className="font-headline-sm text-headline-sm text-border-highlight uppercase">
                KONTAKT- &amp; ANFRAGEFORMULAR
              </h3>
              <p>
                Wenn Sie uns per Kontakt- oder Buchungsformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten (Name, Telefonnummer, Wunsch-Standort,
                Wochentag, Spielstärke, Notiz) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
                mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
                erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
                effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
              </p>

              <h3 className="font-headline-sm text-headline-sm text-border-highlight uppercase">
                WHATSAPP-SCHNITTSTELLE
              </h3>
              <p>
                Wir bieten Ihnen die Möglichkeit, über einen direkten Link Kontakt mit Cheftrainer Amir Reza per WhatsApp
                aufzunehmen. Wenn Sie diesen Link anklicken, verlassen Sie unsere Website und es gelten die
                Datenschutzbestimmungen von WhatsApp Ireland Limited.
              </p>

              <h3 className="font-headline-sm text-headline-sm text-border-highlight uppercase">
                SSL- BZW. TLS-VERSCHLÜSSELUNG
              </h3>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
                SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile
                des Browsers von &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in
                Ihrer Browserzeile.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
